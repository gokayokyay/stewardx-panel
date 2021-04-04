import { TaskIcons } from "../configs/tasks";

function Info({
  text = ''
}) {
  return (
    <span className="text-white text-sm opacity-70 w-full truncate">
      {text}
    </span>
  )
}

export default function WideCard({
  className = '',
  task_name = '',
  info = [],
  task_type = 'DockerTask',
  ButtonComponent = 'div'
}) {
  const IconComponent = TaskIcons[task_type];
  return (
    <div className={`card border-2 flex flex-col w-96 border-white ${className}`} style={{ backgroundColor: '#0E141B' }}>
      <div className="card-header flex h-12 p-3 items-center justify-center">
        <IconComponent fill="white" />
        <div className="truncate text-xl flex-1 ml-2 text-white">
          {task_name}
        </div>
      </div>
      <div className="flex-1 flex card-footer">
        <div className="card-footer-info p-3 flex flex-col">
          {info.map(text => <Info text={text} />)}
        </div>
      </div>
      {ButtonComponent}
    </div>
  );
}