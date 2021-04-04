import { ReactComponent as DockerIcon } from '../assets/docker.svg';
import { ReactComponent as CommandIcon } from '../assets/command.svg';

export const TaskTypes = {
  DockerTask: 'DockerTask',
  CmdTask: 'CmdTask'
};

export const DockerImageTypes = {
  image: 'Docker image',
  file: 'Dockerfile'
};

export const TaskIcons = {
  [TaskTypes.DockerTask]: DockerIcon,
  [TaskTypes.CmdTask]: CommandIcon
};
