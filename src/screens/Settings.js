import { useStore } from "effector-react";
import Input from "../components/Input";
import Label from "../components/Label";
import { setSetting, SettingsStore } from "../stores/SettingsStore";

export default function Settings() {
  const settingsStore = useStore(SettingsStore);
  
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label className="text-xl">
        Settings
      </Label>
      <Input onChange={setSetting('baseURLBlocked loading mixed active content “http://github.com/tasks”')} defaultValue={settingsStore.baseURL} placeholder="http://localhost:3000/api" label="API Base Path" containerProps={{ className: 'mt-8' }} className="mt-4" />
    </div>
  )
}