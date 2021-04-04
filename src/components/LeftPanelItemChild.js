import { useLocation } from "react-router";
import LeftPanelItem from "./LeftPanelItem";

export default function LeftPanelItemChild({
  children,
  childOf,
  to,
  routeKey = null
}) {
  const location = useLocation();
  return location.pathname.includes(childOf) ? (
    <div>
      <LeftPanelItem to={to} routeKey={routeKey || to} className="text-sm">
        {children}
      </LeftPanelItem>
    </div>
  ) : <></>;
}