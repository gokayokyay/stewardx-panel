import { ReactComponent as TickIcon } from '../assets/tick.svg';
import { ReactComponent as FailIcon } from '../assets/cute-fail.svg';
import TurquoiseButton from './TurquoiseButton';

import './ReportCard.css';
import ConditionalRenderer from './ConditionalRenderer';
import { Link } from 'react-router-dom';

export default function ReportCard({
  task_name = 'StewardX TaskTask Task TaskTaskTaskTask Task Task Task',
  className = '',
  id = '',
  successful = false,
  created_at = new Date()
}) {
  return (
    <div style={{ minWidth: '24rem', maxWidth: '24rem' }} className={`h-16 ${successful ? 'bg-blueish' : 'bg-failed'} border-white border-2 flex mx-2 ${className} view-report-container`}>
      <div className="p-4 text-white flex w-16 h-16">
        <ConditionalRenderer condition={successful}>
          <TickIcon className="fill-current" style={{ transform: 'translateY(-10%)' }} />
        </ConditionalRenderer>
        <ConditionalRenderer condition={!successful}>
          <FailIcon className="fill-current" style={{ transform: 'translateY(-20%) scale(0.8)' }} />
        </ConditionalRenderer>
      </div>
      <div className="flex-1 flex items-center text-white truncate pr-2 relative">
        <span className="truncate">
          {task_name}
        </span>
        <span className="absolute bottom-0 text-xs truncate opacity-70">
          {new Date(created_at).toLocaleString()}
        </span>
      </div>
      <Link to={`reports/${id}`} className="flex">
        <TurquoiseButton className={`view-report-btn transition-all truncate border-t-0 border-r-0 border-b-0`}>
          View Report
        </TurquoiseButton>
      </Link>
    </div>
  );
}