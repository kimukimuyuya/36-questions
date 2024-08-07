import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const Envelope = ({ onClick }: { onClick: () => void }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <div className="card cursor-pointer" onClick={handleClick}>
      <div
        className={`relative bg-black w-[300px] sm:w-[350px] transition-all duration-700 aspect-video flex items-center justify-center`}
      >
        <div
          className={`transition-all flex flex-col items-center py-5 justify-start duration-300 ${
            opened ? 'duration-1000 -translate-y-16' : ''
          } bg-white w-full h-full absolute`}
        >
        </div>
        <button
          className={`seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] ${
            opened ? 'opacity-0 scale-0 rotate-180' : ''
          } transition-all duration-1000 border-4 border-rose-900`}
        >
          SMKY
        </button>
        <div
          className={`tp transition-all duration-1000 bg-neutral-800 absolute [clip-path:polygon(50%_50%,_100%_0,_0_0)] ${
            opened
              ? 'duration-100 [clip-path:polygon(50%_0%,_100%_0,_0_0)]'
              : ''
          } w-full h-full`}
        ></div>
        <div
          className={`lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]`}
        ></div>
        <div
          className={`rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]`}
        ></div>
        <div
          className={`btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]`}
        ></div>
      </div>
    </div>
  );
};

export default Envelope;
