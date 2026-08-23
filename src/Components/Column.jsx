import { useDroppable } from "@dnd-kit/react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function Column({ status, title }) {
  const { tasks } = useTasks();

  const { setNodeRef } = useDroppable({
    id: status,
  });

  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <section
      ref={setNodeRef}
      className="min-h-[500px] rounded-xl bg-[#1c1c1e] p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-slate-300">{title}</h2>

        <span className="rounded-full bg-slate-300 px-3 py-1 text-sm text-slate-600">
          {columnTasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default Column;
