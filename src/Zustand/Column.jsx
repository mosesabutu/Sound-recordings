import PropTypes from "prop-types";
import Task from "./Task";
import { useStore } from "./Store";
import { v4 } from "uuid";
import { shallow } from "zustand/shallow";
import { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import classNames from "classnames";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const inputRef = useRef();

  const tasks = useStore(
    (store) => store.tasks,
    // (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const filtered = useMemo(
    () => tasks.filter((task) => task.state.toUpperCase() === state),
    [tasks, state]
  );
  const addTasks = useStore((store) => store.addTasks);
  const setDragTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);
  const inputHome = document.getElementById("inputHome");

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setOpen(false);
      // console.log("hey");
    }
  };
  useEffect(() => {
    inputHome && inputHome.addEventListener("click", handleClickOutside);

    () => {
      return (
        inputHome && inputHome.removeEventListener("click", handleClickOutside)
      );
    };
  }, [inputHome]);
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={() => {
        setDrop(false);
        setDragTask(null);
        moveTask(draggedTask, state);
      }}
      className={classNames(
        "min-h-80 bg-gray-950 w-1/3 max-w-80 mx-1 p-1 rounded",
        { "border-dashed border-white border-2": drop }
      )}
    >
      <Toaster richColors />
      <div className="flex justify-between items-center p-2  ">
        <p className="font-bold ">{state}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-slate-300 text-gray-950 rounded h-fit py-1 px-2 cursor-pointer hover:bg-slate-700 hover:text-gray-200"
        >
          Add
        </button>
      </div>
      {filtered.map((task) => (
        <Task
          key={v4()}
          title={task.title}
          STATUS={task.state.toUpperCase()} // This directly converts state to uppercase
        />
      ))}

      {open && (
        <div
          id="inputHome"
          className="absolute bg-[rgb(0,0,0,0.3)] w-full h-full top-0 left-0 "
        >
          <div
            id="inputWrap"
            ref={inputRef}
            className=" bg-gray-50 absolute z-10 p-1 h-16 w-80 top-[50%] left-[50%] flex items-center justify-center translate-x-[-50%] translate-y-[-50%] rounded-md text-black"
          >
            <input
              className="bg-slate-900 p-1 m-1 text-gray-200  "
              type="text"
              id="addTasks"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button
              onClick={() => {
                if (text !== "") {
                  addTasks(text && text, state);
                  setText("");
                  setOpen(false);
                  toast.success("Task added Succesfully");
                } else {
                  toast.info("Please Type Something");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Column.propTypes = {
  state: PropTypes.any,
};
