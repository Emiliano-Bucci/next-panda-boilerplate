import { LoaderSpinner } from "@/components/LoaderSpinner";
import { css, cx } from "@/panda/css";
import { buttonRecipe } from "@/panda/recipes";
import { ComponentProps, ReactNode } from "react";

const styles = {
  btn: css.raw({
    "&[data-is-loading-skeleton=true]": {
      borderColor: "transparent",
      color: "transparent",
      cursor: "wait",
      "& svg": {
        opacity: "0",
      },
    },
  }),
  leftIconRoot: css({
    mr: "8px",
    flexShrink: "0",
  }),
  rightIconRoot: css({
    ml: "8px",
    flexShrink: "0",
  }),
  loadingSkeleton: css({
    display: "block",
    position: "absolute",
    top: "0",
    left: "0",
    w: "100%",
    h: "100%",
    borderRadius: "inherit",
    bg: "Primary",
    zIndex: "-1",
    transition:
      "opacity 400ms cubic-bezier(0.4, 0, 0.6, 1) var(--opacity-delay, 0ms)",
    pointerEvents: "none",
    opacity: "0",
    animation:
      "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) var(--pulse-delay, 0ms) infinite",
    "[data-is-loading-skeleton=true] &": {
      opacity: "1",
    },
  }),
  loadingSpinnerRoot: css({
    position: "absolute",
    top: "0",
    left: "0",
    w: "100%",
    h: "100%",
    borderRadius: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  loadingSpinner: css.raw({
    w: "24px",
    borderWidth: "3px",
  }),
};

type Props = ComponentProps<"button"> & {
  isLoading?: boolean;
  styles?: ReturnType<typeof css.raw>;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  isLoadingSkeleton?: boolean;
  readOnly?: boolean;
};

export function Button({
  children,
  className,
  type = "button",
  isLoading = false,
  styles: _styles,
  rightIcon,
  leftIcon,
  readOnly,
  ...rest
}: Props) {
  const classNames = cx(
    "button",
    className,
    buttonRecipe(),
    css(styles.btn, _styles),
  );

  return (
    <button
      {...rest}
      className={classNames}
      type={type}
      data-is-loading={isLoading}
      data-has-left-icon={!!leftIcon}
      data-has-right-icon={!!rightIcon}
      onClick={isLoading || readOnly ? undefined : rest.onClick}
    >
      {leftIcon && <div className={styles.leftIconRoot}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={styles.rightIconRoot}>{rightIcon}</div>}
      {isLoading && (
        <div className={styles.loadingSpinnerRoot}>
          <LoaderSpinner styles={styles.loadingSpinner} />
        </div>
      )}
      <span className="cliccable-area" />
    </button>
  );
}
