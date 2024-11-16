import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  tasks: [{ title: "Test Task", state: "PLANNED" }],
  draggedTask: null,

  setDraggedTask: (title) => set({ draggedTask: title }),
  deleteTasks: (title) => {
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    }));
  },
  addTasks: (title, state) => {
    set((store) => ({ tasks: [...store.tasks, { title, state }] }));
  },
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(devtools(store));
