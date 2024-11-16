import classNames from "classnames";
import PropTypes from "prop-types";
import { useStore } from "./Store";
import { FaRegTrashCan } from "react-icons/fa6";

// const STATUS = "PLANNED";
//This must be in all caps

export default function Task({ title, STATUS }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTasks = useStore((store) => store.deleteTasks);
  const setDragTask = useStore((store) => store.setDraggedTask);

  return (
    <div
      onDragStart={() => setDragTask(task.title)}
      draggable
      className="flex flex-col cursor-move justify-between bg-white mb-2 text-gray-900 p-2 rounded min-h-20"
    >
      <p>{task.title}</p>
      <div className="flex justify-between">
        <div className=" my-2">
          <FaRegTrashCan
            onClick={() => {
              deleteTasks(title);
            }}
          />
        </div>
        <p
          className={classNames(
            "text-sm p-1 rounded text-gray-100",
            STATUS === "PLANNED" && "bg-gray-400",
            STATUS === "DONE" && "bg-red-400",
            STATUS === "ONGOING" && "bg-blue-400"
          )}
        >
          {task.state.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
Task.propTypes = {
  title: PropTypes.any,
  STATUS: PropTypes.any,
};
