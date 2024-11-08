import { useDroppable } from "@dnd-kit/core";
import Tasks from "./Tasks";

/* eslint-disable react/prop-types */
export default function Column({ column, tasks }) {
  // console.log(tasks);
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      {tasks.id}
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <Tasks key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
