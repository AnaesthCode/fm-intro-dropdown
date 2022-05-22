import c from "./company.module.css";
import { useTransition, animated } from "react-spring";
const Company = (props) => {
  const transition = useTransition(props.active, {
    from: { opacity: 0, y: -30 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  });
  return transition(
    (style, item) =>
      item && (
        <animated.div style={style} className={c.company}>
          <ul className={c.smallCompany}>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </animated.div>
      )
  );
};

export default Company;
