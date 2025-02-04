import { css } from "@/panda/css";

const styles = {
  loading: css.raw({
    width: "40px",
    aspectRatio: "1",
    borderRadius: "50%",
    border: "4px solid blue",
    borderRightColor: "red",
    animation: "infiniteRotate 1s infinite linear",
  }),
};

type Props = {
  styles?: ReturnType<typeof css.raw>;
};

export function LoaderSpinner({ styles: _styles }: Props) {
  return <div className={css(styles.loading, _styles)} />;
}
