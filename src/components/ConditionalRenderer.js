import React from "react";

export default function ConditionalRenderer({
  condition = false,
  children = null
}) {
  return condition ? children : React.Fragment;
}
