import CalendarIcon from "../icons/calendar";
import PlanningIcon from "../icons/planning";
import ReminderIcon from "../icons/reminders";
import TodoIcon from "../icons/todo";
import c from "./features.module.css";
import { useTransition, animated } from "react-spring";

const Features = (props) => {
  const transition = useTransition(props.active, {
    from: { opacity: 0, y: -30 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  });

  return transition(
    (style, item) =>
      item && (
        <animated.div style={style} className={`${c.features}`}>
          <ul className={c.smallFeatures}>
            <li>
              <span>
                <TodoIcon />
              </span>
              Todo
            </li>
            <li>
              <span>
                <CalendarIcon />
              </span>
              Calendar
            </li>
            <li>
              <span>
                <ReminderIcon />
              </span>
              Reminders
            </li>
            <li>
              <span>
                <PlanningIcon />
              </span>
              Planning
            </li>
          </ul>
        </animated.div>
      )
  );
};

export default Features;
