import { useSpring, animated } from "react-spring";

const ArrowUp = (props) => {
  const spring = useSpring({
    to: { opacity: 1, transform: "rotate(0deg)" },
    from: { opacity: 1, transform: "rotate(180deg)" },
  });
  return (
    <animated.svg
      style={spring}
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4" />
    </animated.svg>
  );
};

export default ArrowUp;
