import { useParams } from "react-router-dom";

export default function TasksEdit() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      
    </div>
  )
}