Give me 3k nowimport Column from "./Column";

export default function AppZ() {
  return (
    <div className="flex justify-center align-baseline">
      <Column state={"PLANNED"} />
      <Column state={"ONGOING"} />
      <Column state={"DONE"} />
    </div>
  );
}
