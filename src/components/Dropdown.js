import Select from 'react-select';
import './Dropdown.css';

export default function Dropdown({
  className = '',
  options = [],
  ...props
}) {
  return <Select options={options} className="text-white border-white border-2 bg-transparent" classNamePrefix="dropdown-" {...props} />
}