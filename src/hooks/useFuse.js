import { useState, useMemo } from "react";
import Fuse from 'fuse.js';

export default function useFuse({
  options: optionsProp = {},
  list: listProp = []
}) {
  const [fuse, setFuse] = useState(new Fuse(listProp, optionsProp));
  const [list, setList] = useState(listProp);
  const [options, setOptions] = useState(optionsProp);
  useMemo(() => {
    const listIDs = list.map(({ id }) => ({ id }));
    const listPropIDs = listProp.map(({ id }) => ({ id }));
    if (JSON.stringify(listPropIDs) !== JSON.stringify(listIDs) || JSON.stringify(options) !== JSON.stringify(optionsProp)) {
      setList(listProp);
      setOptions(optionsProp);
      const newFuse = new Fuse(listProp, optionsProp);
      setFuse(newFuse);
    }
  }, [listProp, optionsProp]);
  return fuse;
}