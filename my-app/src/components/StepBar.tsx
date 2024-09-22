import React from 'react';

type Level = {
  number: number;
  text: string;
  color: string;
};

const StepBar = ({ QuestionLevel }: { QuestionLevel: number }) => {
  const currentLevel = Number(QuestionLevel);
  const levels: Level[] = [
    { number: 1, text: 'Lv.1', color: '#ECACB5' },
    { number: 2, text: 'Lv.2', color: '#DA6272' },
    { number: 3, text: 'Lv.3', color: '#C7243A' },
  ];

  return (
    <div className="text-white text-base mt-10 sm:mt-20">
      <ul className="flex justify-center space-x-10 sm:space-x-20">
        {levels.map((level, index) => (
          <li key={index} className="relative flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              {/* 円 */}
              <div
                className={`number ${currentLevel >= level.number ? 'active text-white' : 'bg-white text-gray-500'} transition 
                duration-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1 sm:mb-2 font-bold z-10`}
                style={{
                  backgroundColor: currentLevel >= level.number ? level.color : 'white',
                  color: currentLevel >= level.number ? 'white' : 'gray',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                {level.number}
              </div>
              
              {/* 線 */}
              {index < levels.length - 1 && (
                <div
                  className="line absolute top-1/2 transform -translate-y-1/2 h-1 sm:h-1.5 transition-all duration-500"
                  style={{
                    width: currentLevel > level.number ? '200%' : '0',
                    left: '2rem',
                    right: '-2rem',
                    background: `linear-gradient(to right, ${level.color}, ${levels[index + 1].color})`,
                    transitionDelay: `${index * 0.2}s`
                  }}
                ></div>
              )}
              
            </div>
            <div className={`text text-base sm:text-lg ${currentLevel >= level.number ? 'active' : 'text-gray-500'}`} style={{ color: currentLevel >= level.number ? level.color : 'gray' }}>
              {level.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepBar;