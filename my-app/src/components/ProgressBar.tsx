import React from 'react';

const ProgressBar = ({ level }: { level: string }) => {
  const getProgress = (level: string) => {
    switch (level) {
      case '1':
        return '33%';
      case '2':
        return '66%';
      case '3':
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: getProgress(level) }}
      ></div>
    </div>
  );
};

export default ProgressBar;
