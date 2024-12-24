export const options = {
  animate: true,
  layout: "1-column-left",
  lineColor: "#B1B1B1",
  className: "vertical-timeline p-0",
};

const iconStyle = { background: "#B5B5B5" };
const contentArrowStyle = { display: "none" };
export const contentStyle = (w) => {
  let styles = {
    border: "solid 2px #B5B5B5",
    backgroundColor: "none",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "1.5em 1.75em",
    width: w,
  };

  return styles;
};

export const childrenOptions = {
  className: "vertical-timeline-element--work",
  iconClassName:
    "bg-[#B5B5B5] w-4 h-4 left-3 xl:top-24 lg:top-32 xs:top-24 shadow-none  ",
  contentArrowStyle: contentArrowStyle,
  contentStyle: contentStyle(),
  iconStyle: iconStyle,
  dateClassName: "none",
};
