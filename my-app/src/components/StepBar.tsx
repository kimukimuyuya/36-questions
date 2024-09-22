import React from 'react';

const StepBar = ({ QuestionLevel }: { QuestionLevel: number }) => {
  const currentLevel = Number(QuestionLevel);
  const levels = [
    { number: 1, text: 'Lv.1', color: 'secondaryColor' },
    { number: 2, text: 'Lv.2', color: 'subColor' },
    { number: 3, text: 'Lv.3', color: 'baseColor' },
  ];
  // TODO: コンポーネントの分割
  return (
    <div className="text-white text-base mt-10 sm:mt-20">
      <ul className="flex justify-center space-x-10 sm:space-x-20">
        {levels.map((level, index) => (
          <li key={index} className="relative flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              {/* 円 */}
              <div
                className={`number ${currentLevel >= level.number ? `active bg-${level.color} text-white` : 'bg-white text-gray-500'} transition 
                duration-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1 sm:mb-2 font-bold z-10`}
                style={{
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                {level.number}
              </div>
              
              {/* 線 */}
              {index < levels.length - 1 && (
                <div
                  className={`line absolute top-1/2 transform -translate-y-1/2 h-1 sm:h-1.5 ${currentLevel > level.number ? 'line-active bg-baseColor' : 'bg-gray-500'} transition-all duration-500`}
                  style={{
                    width: currentLevel > level.number ? '200%' : '0',
                    left: '2rem',
                    right: '-2rem',
                    transitionDelay: `${index * 0.2}s`
                  }}
                ></div>
              )}
              
            </div>
            <div className={`text text-base sm:text-lg  ${currentLevel >= level.number ? `active text-${level.color}` : 'text-gray-500'}`}>
              {level.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepBar;
