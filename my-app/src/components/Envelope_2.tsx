import { useState } from 'react';

const Envelope = () => {
  const [flapOpen, setFlapOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#f5edd1] shadow-lg p-10 relative">
        <div className={`relative w-[350px] h-[250px] ${flapOpen ? 'flap' : ''}`}>
          <div
            className={`absolute top-0 z-20 border-t-[130px] border-t-[#ecdeb8] border-x-[175px] border-x-transparent transform-origin-top transition-all duration-500 ease-in-out delay-[700ms] ${flapOpen ? 'before:transform rotate-x-180' : ''}`}
          ></div>
          <div
            className={`absolute z-20 w-0 h-0 border-t-[130px] border-t-transparent border-x-[175px] border-x-[#e6cfa7] border-b-[120px] border-b-[#e6cfa7] ${flapOpen ? 'after:transform rotate-x-180' : ''}`}
          ></div>
          <div className={`absolute right-[20%] bottom-0 w-[54%] h-[80%] bg-white text-center transition-all duration-1000 ease-in-out p-5 ${flapOpen ? 'transform scale-150' : ''}`}>
            <div className="font-caveat font-normal text-justify text-[11px] pr-1 text-black">
              <strong className="text-[12px]">Dear Programmers,</strong>
              <p>I hope you are having a good day today! Just know that I commend all of you, and your work as programmers is greatly appreciated!</p>
              <p className="text-right">Sincerely, Dwyane</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setFlapOpen(!flapOpen)}
          className={`absolute top-[50%] left-[50%] w-[15px] h-[15px] bg-[#c2465d] z-40 transform translate-x-[-50%] translate-y-[-20%] rotate-[45deg] transition-transform duration-500 ease-in-out delay-1000 cursor-pointer ${flapOpen ? 'rotate-90' : ''}`}
        >
          <div className="absolute w-[15px] h-[15px] bg-[#c2465d] rounded-full top-[-7.5px]"></div>
          <div className="absolute w-[15px] h-[15px] bg-[#c2465d] rounded-full right-[7.5px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;