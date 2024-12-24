import PropTypes from "prop-types";

// components
import { Fade } from "react-awesome-reveal";

// constant
import {
  len4,
  len5,
  len7,
  card4,
  card5,
  card7,
  p4,
  p5,
} from "constant/capabilities";

export default function Capabilities({ role, card }) {
  const wrap = card.length === 4 ? len4 : len5;
  const cardLen = card.length === 4 ? card4 : card5;
  const par = card.length === 4 ? p4 : p5;

  return (
    <div className={wrap}>
      <Fade direction="down" duration={1000}>
        <h1 className="font-bold text-center hd:text-5xl hd:mb-12 3xl:text-4xl 3xl:mb-10 2xl:text-4xl 2xl:mb-10 xl:text-4xl xl:mb-8 lg:text-4xl lg:mb-12 xs:text-2xl xs:mb-10">
          {role === "AI-Powered Creative Assistants" ? (
            <>
              What Can <span className="text-blue-600">{role}</span> Do for You?
            </>
          ) : (
            <>
              Our <span className="text-blue-600">{role}</span> excel in:
            </>
          )}
        </h1>
      </Fade>

      {card.length <= 5 && (
        <div className={cardLen}>
          {card.map((item) => {
            if (item.title !== "")
              return (
                <div
                  key={`title-${item.id}`}
                  className="w-full flex items-end justify-center xl:grid xs:hidden"
                >
                  {item.title && (
                    <Fade direction="down" duration={1000}>
                      <h2 className="text-center text-zinc-600 font-bold hd:text-3xl 3xl:text-xl 2xl:text-xl">
                        {item.title}
                      </h2>
                    </Fade>
                  )}
                </div>
              );
          })}

          {card.map((item) => (
            <div key={item.id} className="w-full flex flex-col gap-4">
              {item.title && (
                <Fade
                  direction="down"
                  duration={1000}
                  className="xl:hidden xs:grid"
                >
                  <h2 className="text-center text-zinc-600 font-bold lg:text-2xl xs:text-2xl">
                    {item.title}
                  </h2>
                </Fade>
              )}

              <Fade direction="up" duration={1000}>
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-auto"
                />
              </Fade>

              <Fade direction="up" duration={1000}>
                <p className={par}>{item.desc}</p>
              </Fade>
            </div>
          ))}
        </div>
      )}

      {card.length === 7 && (
        <div className={card7}>
          {card.map((item) => (
            <div key={item.id} className={len7}>
              {item.title && (
                <Fade
                  direction="down"
                  duration={1000}
                  className="w-full flex items-end justify-center hd:h-10 3xl:h-12 2xl:h-12 xl:h-10"
                >
                  <h2 className="text-center text-zinc-600 font-bold lg:text-2xl xs:text-2xl">
                    {item.title}
                  </h2>
                </Fade>
              )}

              <Fade direction="up" duration={1000}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </Fade>

              <Fade direction="up" duration={1000}>
                <p className={par}>{item.desc}</p>
              </Fade>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Capabilities.propTypes = {
  role: PropTypes.string.isRequired,
  card: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      image: PropTypes.string.isRequired,
      desc: PropTypes.node.isRequired,
    })
  ).isRequired,
};
