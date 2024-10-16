import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import 'animate.css'

const Envelope = ({ onClick }: { onClick: () => void }) => {
  const [opened, setOpened] = useState(false);
  const [reset, setReset] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      setReset(true);
    }, 1000);
  };

  return (
    <div
      className={`shadow-md relative w-[300px] sm:w-[350px] transition-all duration-700 aspect-video flex items-center justify-center cursor-pointer
      ${opened ? 'shadow-none' : 'shadow-md'}
      `}
      onClick={handleClick}
    >
      <div
        className={`transition-all delay-500 w-full h-full absolute
        ${ opened ? 'duration-1000 -translate-y-16' : ''}
        ${ reset ? 'duration-0 translate-y-0' : ''}
        `}
      >
        <QuestionCard question='あなたの好きなポケモンはなんですか？' />
      </div>
      <button
        className={`seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)]${
          opened ? 'opacity-0 scale-0 rotate-180' : ''
        } transition-all duration-1000 border-4 border-rose-900`}
      >
        SMKY
      </button>
      <div
        className={`tp z-20 transition-all duration-1000 absolute w-full h-full bg-cover bg-[url('/pink.jpg')]
          ${opened
            ? 'duration-0 opacity-0 [clip-path:polygon(50%_0%,_100%_0,_0_0)]'
            : '[clip-path:polygon(50%_50%,_100%_0,_0_0)]'
        }`}
      >
      </div>
      <div 
        className={`absolute z-10 w-full h-full bg-red-200 top-0 left-0 [clip-path:polygon(50%_51%,_100%_1%,_0_1%)]
          ${opened ? 'opacity-0' : ''}`}
      ></div>
      <div
        className={`lft transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_0_0,_0_100%)] bg-cover bg-[url('/pink.jpg')] 
          ${opened ? 'opacity-0 delay-1000' : ''}`}
      ></div>
      <div
        className={`rgt transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] bg-cover bg-[url('/pink.jpg')]
          ${opened ? 'opacity-0 delay-1000' : ''}`}
      ></div>
      <div
        className={`btm transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] bg-cover bg-[url('/pink.jpg')]
          ${opened ? 'opacity-0 delay-1000' : ''}`}
      ></div>
    </div>
  );
};

export default Envelope;
