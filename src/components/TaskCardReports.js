import { setActiveTaskForReports } from "../stores/ReportStore";
import TurquoiseButton from "./TurquoiseButton";
import WideCard from "./WideCard";

export default function TaskCardReports({
  last_exec = new Date(),
  exec_count = 0,
  next_exec = new Date(),
  ...rest
}) {
  
  return (
    <WideCard
      className="m-4"
      info={[
        `Last executed at: ${new Date(last_exec).toLocaleString()}`,
        `Executed ${exec_count} times.`,
        `Next execution: ${new Date(next_exec).toLocaleString()}`
      ]}
      ButtonComponent={(
        <div className="flex-1 flex justify-around items-center pb-4 px-2">
          <TurquoiseButton onClick={() => {
            console.log(rest);
            setActiveTaskForReports(rest.id)
          }}>
            View reports
          </TurquoiseButton>
        </div>
      )}
      {...rest}
    />
  )
}