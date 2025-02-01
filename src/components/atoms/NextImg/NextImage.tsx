"use client";

import { css, cx } from "@/panda/css";
import OwnNextImage, { getImageProps } from "next/image";
import {
  ComponentProps,
  ComponentRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

const styles = {
  root: css.raw({
    display: "flex",
    position: "relative",
    w: "100%",
    h: "100%",
    zIndex: "0",

    "&[data-with-fadein=true] img": {
      transition: "opacity 240ms ease",
    },
    "&[data-with-fadein=false] img": {
      transition: "none",
    },
    "&[data-is-lazy=true] img": { opacity: "0" },

    "&[data-is-loaded=true] .image-placeholder": {
      opacity: "0",
    },
    "&[data-is-lazy=true][data-is-loaded=true] img": {
      opacity: "1",
    },
  }),
  image: css({
    w: "100%",
    h: "100%",
    objectFit: "cover",
    textAlign: "center",
    color: "transparent",
    borderRadius: "inherit",
    "&[data-is-priority=true][data-animate-during-first-decoding=false]": {
      opacity: "1",
      "& ~ .image-placeholder": {
        opacity: "0",
      },
    },
    "&[data-animate-during-first-decoding=true]": {
      opacity: "0",
      transition: "opacity 400ms 120ms ease",
    },
  }),
  placeholder: css({
    display: "flex",
    w: "100%",
    h: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "1",
    pointerEvents: "none",
    bg: "#fff",
    borderRadius: "inherit",
    zIndex: "-1",
    transition: "opacity 400ms ease",
  }),
};

export type Props = ComponentProps<typeof OwnNextImage> & {
  lazy?: boolean;
  renderPlaceholder?: boolean;
  withFadeIn?: boolean;
  extraContent?: ReactNode;
  styles?: ReturnType<typeof css.raw>;
};

export function NextImage({
  alt = "",
  title = "",
  className,
  styles: _styles,
  extraContent,
  lazy = false,
  renderPlaceholder = true,
  withFadeIn = false,
  priority = true,
  ...props
}: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [loaded, setIsLoaded] = useState(false);
  const firstMount = useRef(true);
  const rootRef = useRef<ComponentRef<"div">>(null);

  const propSrc = props.src;
  const { props: _imageProps } = getImageProps({
    ...props,
    // @ts-ignore
    src: priority ? propSrc : src,
    alt,
    title,
  });

  // @ts-ignore
  const { blurWidth: _, blurHeight: __, ...imageProps } = _imageProps;

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -80px 0px",
    skip: !lazy,
  });
  const shouldRenderPlaceholder = renderPlaceholder;

  useEffect(() => {
    if (inView && typeof propSrc === "string" && lazy) {
      setSrc(propSrc || null);
    }
  }, [propSrc, inView, lazy]);
  useEffect(() => {
    if (propSrc && src && propSrc !== src && withFadeIn) {
      rootRef.current!.setAttribute("data-disable-transition", "true");
      setIsLoaded(false);
    }
  }, [propSrc]);

  const imageElement = (
    // eslint-disable-next-line
    <img
      draggable={false}
      {...imageProps}
      // @ts-ignore
      src={priority ? imageProps.src : src}
      alt={alt}
      title={title}
      className={styles.image}
      decoding={priority ? "sync" : "async"}
      data-is-priority={priority}
      ref={(r) => {
        ref(r);
        if (r) {
          if (priority && r.currentSrc) {
            r.setAttribute("data-animate-during-first-decoding", "false");
          }
          if (priority && !r.currentSrc && firstMount.current && withFadeIn) {
            firstMount.current = false;
            r.setAttribute("data-animate-during-first-decoding", "true");
          }
          if (!priority && r.currentSrc) {
            firstMount.current = false;
          }
        }
      }}
      onLoad={() => {
        if (lazy && !firstMount.current) {
          rootRef.current!.setAttribute("data-disable-transition", "false");
          setTimeout(() => setIsLoaded(true), 50);
          return;
        }
        if (lazy && !src) return;
        setIsLoaded(true);
      }}
    />
  );

  return (
    <div
      className={cx("image-wrapper", className, css(styles.root, _styles))}
      data-is-loaded={loaded}
      data-is-lazy={!!lazy}
      data-with-fadein={withFadeIn}
      ref={rootRef}
    >
      {priority && propSrc && imageElement}
      {!priority && imageElement}
      {shouldRenderPlaceholder && (
        <div className={cx("image-placeholder", styles.placeholder)} />
      )}
      {extraContent}
      {typeof props.src === "string" && props.src && lazy && (
        <noscript>
          {/* eslint-disable-next-line */}
          <img src={props.src} title={title} alt={alt} loading="lazy" />
        </noscript>
      )}
    </div>
  );
}
