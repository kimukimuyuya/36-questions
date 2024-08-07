import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const Envelope = ({ onClick }: { onClick: () => void }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={`relative w-[300px] sm:w-[350px] transition-all duration-700 aspect-video flex items-center justify-center cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`transition-all flex flex-col items-center justify-start duration-300 ${
          opened ? 'duration-1000 -translate-y-16' : ''
        } bg-white w-full h-full absolute`}
      >
        <QuestionCard question='Q. What is the capital of Japan?' />
      </div>
      <button
        className={`seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)]${
          opened ? 'opacity-0 scale-0 rotate-180' : ''
        } transition-all duration-1000 border-4 border-rose-900`}
      >
        SMKY
      </button>
      <div
        className={`tp transition-all duration-1000 absolute [clip-path:polygon(50%_50%,_100%_0,_0_0)] w-full h-full bg-cover bg-[url('/pink_paper.jpg')] ${
          opened
            ? 'duration-0 [clip-path:polygon(50%_0%,_100%_0,_0_0)] opacity-0'
            : ''
        }`}
      ></div>
      <div
        className={`lft transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_0_0,_0_100%)] bg-cover bg-[url('/pink_paper.jpg')] `}
      ></div>
      <div
        className={`rgt transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] bg-cover bg-[url('/pink_paper.jpg')]`}
      ></div>
      <div
        className={`btm transition-all duration-700 absolute w-full h-full bg-[#ecdeb8] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] bg-cover bg-[url('/pink_paper.jpg')]`}
      ></div>
    </div>
  );
};

export default Envelope;
