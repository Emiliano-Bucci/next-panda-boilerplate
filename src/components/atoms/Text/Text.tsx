import { css, cx } from "@/panda/css";
import { textRecipe } from "@/panda/recipes";
import { ComponentProps, ReactNode } from "react";

type RecipeProps = {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "label"
    | "sub"
    | "li";
};

type ElementProps = {
  as: RecipeProps["as"];
  classNames: string;
  children: ReactNode;
} & Omit<ComponentProps<"div">, "color">;

function Element({ as, classNames, children, ...attrs }: ElementProps) {
  switch (as) {
    default:
    case "p": {
      return (
        <p {...attrs} className={classNames}>
          {children}
        </p>
      );
    }
    case "span": {
      return (
        <span {...attrs} className={classNames}>
          {children}
        </span>
      );
    }
    case "sub": {
      return (
        <sub {...attrs} className={classNames}>
          {children}
        </sub>
      );
    }
    case "li": {
      return (
        // @ts-ignore
        <li {...attrs} className={classNames}>
          {children}
        </li>
      );
    }
    case "h1": {
      return (
        <h1 {...attrs} className={classNames}>
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2 {...attrs} className={classNames}>
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3 {...attrs} className={classNames}>
          {children}
        </h3>
      );
    }
    case "h4": {
      return (
        <h4 {...attrs} className={classNames}>
          {children}
        </h4>
      );
    }
    case "h5": {
      return (
        <h5 {...attrs} className={classNames}>
          {children}
        </h5>
      );
    }
    case "h6": {
      return (
        <h6 {...attrs} className={classNames}>
          {children}
        </h6>
      );
    }
  }
}

export type Props = Omit<ComponentProps<"div">, "color"> &
  RecipeProps & {
    styles?: ReturnType<typeof css.raw>;
  };

export function Text({
  children,
  styles: _styles,
  dangerouslySetInnerHTML,
  ...rest
}: Omit<Props, "ref">) {
  if (!rest.as) {
    rest.as = "span";
  }

  const { as: _ } = rest;

  return (
    <Element
      {...rest}
      as={rest.as}
      classNames={cx("text", textRecipe(), rest.className, css(_styles))}
    >
      {dangerouslySetInnerHTML ? (
        <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      ) : (
        children
      )}
    </Element>
  );
}
