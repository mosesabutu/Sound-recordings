import { produce } from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  draggedTask: null,

  setDraggedTask: (title) => set({ draggedTask: title }),
  deleteTasks: (title) => {
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    }));
  },
  addTasks: (title, state) => {
    set(
      // (store) => ({ tasks: [...store.tasks, { title, state }] }),
      produce((store) => {
        store.tasks.push({ title, state });
      }),
      false,
      "addTasks"
    );
  },
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      set(...args);
      // console.log(...args)
    },
    get,
    api
  );
export const useStore = create(
  log(persist(devtools(store), { name: "storeTasks" }))
);
