import React from 'react';

const StepBar = ({ QuestionLevel }: { QuestionLevel: string }) => {
  const currentLevel = Number(QuestionLevel);
  const levels = [
    { number: 1, text: 'level1' },
    { number: 2, text: 'level2' },
    { number: 3, text: 'level3' },
    { number: 4, text: '最後に' }
  ];

  return (
    <div className="text-white text-base mt-10 sm:mt-20 uppercase">
      <ul className="flex justify-center space-x-10 sm:space-x-20">
        {levels.map((level, index) => (
          <li key={index} className="relative flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <div
                className={`number ${currentLevel >= level.number ? 'active bg-purple-700 text-white' : 'bg-white text-gray-500'} transition duration-300 w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1 sm:mb-2 font-bold z-10`}
              >
                {level.number}
              </div>
              
              {index < levels.length - 1 && (
                <div
                  className={`line absolute top-1/2 transform -translate-y-1/2 h-0.5 sm:h-1.5 ${currentLevel > level.number ? 'line-active bg-purple-700' : 'bg-white'} transition-all duration-1000`}
                  style={{
                    width: currentLevel > level.number ? '200%' : '0',
                    left: '2rem',
                    right: '-2rem',
                    sm: { left: '4rem', right: '-4rem' }
                  }}
                ></div>
              )}
              
            </div>
            <div className="text text-sm sm:text-lg">{level.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepBar;
