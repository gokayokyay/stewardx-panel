import { useState } from 'react';
import { abortTask } from '../api';
import useInterval from '../hooks/useInterval';
import OrangeButton from './OrangeButton';
import WideCard from './WideCard';

export default function ActiveTaskCard({
  exec_count = 0,
  next_exec = new Date(),
  last_exec = new Date(),
  ...props
}) {
  const id = props.id;
  const [secsPassed, setSecsPassed] = useState((new Date() - new Date(last_exec)).valueOf());
  useInterval(() => {
    setSecsPassed(secsPassed + 1);
  }, 1000);
  const onAbortClick = () => {
    abortTask(id);
  };
  return (
    <WideCard
      ButtonComponent={
        <div className="flex-1 flex justify-center items-center pb-4 px-2">
          <OrangeButton onClick={onAbortClick}>
            Abort task
          </OrangeButton>
         </div>
      }
      info={[
        `Running for ${secsPassed} seconds.`,
        `Execution number: ${exec_count}`,
        `Next execution: ${new Date(next_exec).toLocaleString()}`
      ]}
      last_exec={last_exec}
      {...props}
    />
  );
}