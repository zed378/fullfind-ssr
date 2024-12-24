import { useRouter } from "next/router";
import PropTypes from "prop-types";

// constant
import { rolePad, rolePads } from "constant/padding";

export default function RoleBtn({ open, inCard, val }) {
  const router = useRouter();

  return (
    <button
      className={`${inCard ? rolePad : rolePads}`}
      onClick={() => {
        router.push("/pricing");
        open();
      }}
    >
      {val}
    </button>
  );
}

RoleBtn.propTypes = {
  open: PropTypes.func.isRequired,
  inCard: PropTypes.bool,
  val: PropTypes.string.isRequired,
};
