import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

// components
import { AllRoles } from "atoms/Button";
import { RolesCard } from "atoms/Card";

// constant
import { roles } from "constant/roles";

export default function NavCard({ roleMenu, setRoleMenu, anim }) {
  return (
    <div
      className="xl:px-16 xs:px-3 pb-6 mt-1.5 overflow-hidden"
      onMouseLeave={() => {
        setRoleMenu(false);
      }}
    >
      <div
        className={`${anim} bg-white shadow-lg px-8 py-8 rounded-xl flex animate__animated ${
          roleMenu ? "animate__fadeInDown" : "animate__fadeOutUp"
        }`}
      >
        {/* Banner */}
        <div className="w-[32.5%] pr-8 flex flex-col gap-20">
          <Fade duration={500} delay={400}>
            <h1 className="3xl:text-[40px] 3xl:leading-tight 2xl:text-2xl xl:text-xl font-bold hover:text-slate-600">
              Find the people that will help you scale profitably
            </h1>
          </Fade>

          <Fade duration={500} delay={400} direction="up">
            <AllRoles />
          </Fade>
        </div>
        {/* End Of Banner */}

        {/* Services */}
        <Fade duration={300} direction="down" cascade>
          <ul className="w-[75%] grid grid-rows-2 grid-cols-3 gap-4 z-0">
            {roles.map((role) => (
              <RolesCard
                key={role.id}
                item={role}
                close={() => setRoleMenu(false)}
              />
            ))}
          </ul>
        </Fade>
        {/* End Of Services */}
      </div>
    </div>
  );
}

NavCard.propTypes = {
  roleMenu: PropTypes.bool.isRequired,
  setRoleMenu: PropTypes.func.isRequired,
  anim: PropTypes.string.isRequired,
};
