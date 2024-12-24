import PropTypes from "prop-types";

// components
import useProgress from "hooks/progress";

export default function ProgressBar({ primary, secondary, prog, icon }) {
  const { progress, progressRef } = useProgress(prog, 500);

  return (
    <div
      ref={progressRef}
      className={`w-full ${
        secondary[0] === "#" ? `bg-[${secondary}]` : secondary
      } hd:h-20 2xl:h-16 xl:h-14 lg:h-16 xs:h-10 rounded-full xl:my-5 lg:my-5 xs:my-4 flex items-center justify-between`}
    >
      <div
        className={`h-full ${
          primary[0] === "#" ? `bg-[${primary}]` : primary
        } rounded-full`}
        style={{
          width: `${progress}%`,
          transition: progress === 0 ? "none" : "width 500ms linear",
        }}
      />

      <img
        src={icon}
        alt="Progress icon"
        className="hd:h-12 hd:mr-8 2xl:h-10 xl:h-9 xl:mr-6 lg:h-12 lg:mr-7 xs:h-7 xs:mr-6"
      />
    </div>
  );
}

ProgressBar.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  prog: PropTypes.number,
  icon: PropTypes.string,
};
