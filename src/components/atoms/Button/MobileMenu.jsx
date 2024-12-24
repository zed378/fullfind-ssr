import PropTypes from "prop-types";

import { CiMenuFries } from "react-icons/ci";

export default function MobileMenu({ update, menus }) {
  return (
    <div className="cursor-pointer">
      <div
        className={`${
          menus ? "bg-blue-200 text-blue-600" : "bg-white"
        } rounded-full p-2 lg:text-xs font-black`}
        onClick={update}
      >
        <CiMenuFries />
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  update: PropTypes.func.isRequired,
  menus: PropTypes.bool.isRequired,
};
