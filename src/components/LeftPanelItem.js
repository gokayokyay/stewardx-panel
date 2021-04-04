import Label from "./Label";
import { Link, useLocation } from "react-router-dom";

export default function LeftPanelItem({
  children,
  className,
  to = '',
  routeKey
}) {
  const location = useLocation();
  return (
    <Link to={to}>
      <Label className={`${className} ${location.pathname.includes(routeKey) ? 'opacity-100 border-opacity-100' : 'opacity-70 border-opacity-0 hover:border-opacity-100 hover:opacity-100'} transition-all`}>
        {children}
      </Label>
    </Link>
  )
}