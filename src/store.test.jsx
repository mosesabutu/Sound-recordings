// import { expect, test, vi } from "vitest";
// import PropTypes from "prop-types";
// import { useStore } from "./Zustand/Store";
// import { useEffect } from "react";
// import { render } from "@testing-library/react";
// vi.mock("zustand");

// function TestComponent({ selector, effect }) {
//   const items = useStore(selector);
//   useEffect(() => {
//     effect(items); //t allows us to monitor what is going on with our store
//   }, [items]);

//   return null;
// }
// test("should reurn default value", () => {
//   const selector = (store) => store.tasks;
//   const effect = vi.fn();
//   render(<TestComponent selector={selector} effect={effect} />);
//   expect(effect).toHaveBeenCalledWith([]);
// });
// test("should add an item to the store and rerun", () => {
//   let createdTasks = false;
//   let currentItems;
//   const selector = (store) => ({
//     tasks: store.tasks,
//     addTask: store.addTask,
//     deleteTasks: store.deleteTasks,
//   });
//   const effect = vi.fn().mockImplementation((items) => {
//     currentItems = items;
//     if (!createdTasks) {
//       items.addTask("a", "b");
//       createdTasks = true;
//     } else if (items.task.length === 1) {
//       items.deleteTasks("a");
//     }
//   });
//   render(<TestComponent selector={selector} effect={effect} />);
//   expect(effect).toHaveBeenCalledTimes(3);
//   expect(currentItems.tasks).toEqual([]);
// });

import { render } from "@testing-library/react";
import { useEffect } from "react";
import { vi, test, expect } from "vitest";
import { useStore } from "./Zustand/Store";
import PropTypes from "prop-types";
// vi.mock("zustand");

function TestComponent({ selector, effect }) {
  const items = useStore(selector);

  useEffect(() => effect(items), [items]);

  return null;
}

test("should return default value at the start", () => {
  const selector = (store) => store.tasks;
  const effect = vi.fn();
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledWith([]);
});

test("should add an items to the store and rerun the effect", () => {
  const selector = (store) => ({ tasks: store.tasks, addTask: store.addTask });
  const effect = vi.fn().mockImplementation((items) => {
    if (items.tasks.length === 0) {
      items.addTask("a", "b");
    }
  });
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledTimes(2);
  expect(effect).toHaveBeenCalledWith(
    expect.objectContaining({ tasks: [{ title: "a", state: "b" }] })
  );
});

test("should add an items to the store and rerun the effect", () => {
  const selector = (store) => ({
    tasks: store.tasks,
    addTask: store.addTask,
    deleteTask: store.deleteTask,
  });
  let createdTask = false;
  let currentItems;
  const effect = vi.fn().mockImplementation((items) => {
    currentItems = items;
    if (!createdTask) {
      items.addTask("a", "b");
      createdTask = true;
    } else if (items.tasks.length === 1) {
      items.deleteTask("a");
    }
  });
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledTimes(3);
  expect(currentItems.tasks).toEqual([]);
});

TestComponent.propTypes = {
  selector: PropTypes.any,
  effect: PropTypes.any,
};
