import { useStore } from "effector-react";
import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Input from "../components/Input";
import Label from "../components/Label";
import TurquoiseButton from "../components/TurquoiseButton";
import { DockerImageTypes, TaskIcons, TaskTypes } from "../configs/tasks";
import { CreateTaskStore, setTaskProp, setTaskProps } from "../stores/CreateTaskStore";
import { capitalize } from "../utils";

const createDockerSerde = (type, content) => {
  return {
    image: {
      t: capitalize(type),
      c: content
    }
  };
};

export default function TasksCreateProperties() {
  const store = useStore(CreateTaskStore);
  const [imageType, setImageType] = useState();
  const DockerIcon = TaskIcons[TaskTypes.DockerTask];
  switch (store.task_type) {
    case 'CmdTask':
      return (
        <div>
          <Input label="Enter command to execute" placeholder="echo 'Hello StewardX'" onChange={setTaskProp('command')} defaultValue={store.task_props.command} />
        </div>
      );
    case 'DockerTask':
      return (
        <div>
          <Label className="mt-8">
            Select image type
          </Label>
          <div className="flex mt-8 -ml-2 -mr-2">
            {Object.keys(DockerImageTypes).map(key => {
              return (
                <TurquoiseButton active={imageType === key} onClick={() => setImageType(key)} className="m-2">
                  <DockerIcon className="w-9 h-9 fill-current mr-4" />
                  {DockerImageTypes[key]}
                </TurquoiseButton>  
              )
            })}
          </div>
          {
            imageType === 'file' ? (
              <>
                <Label>
                  Enter file contents
                </Label>
                <div id="code-editor" className="h-32 mt-8"></div>
                <CodeEditor
                  mountID="code-editor"
                  language="docker"
                  content={store.task_props?.image?.c || 'from debian:latest'}
                  onChange={content => setTaskProps(createDockerSerde(imageType, content))}
                />
              </>
            ) : 
            (
              <Input label="Enter image name and tag" placeholder="debian:latest" onChange={val => setTaskProps(createDockerSerde('image', val))} />
            )
          }
          
        </div>
      );
    default:
      return null;
  }
}