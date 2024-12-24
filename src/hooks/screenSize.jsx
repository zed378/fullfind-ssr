import useWindowSize from "@rooks/use-window-size";

export default function WidthSize() {
  const { innerWidth } = useWindowSize();

  return innerWidth;
}
