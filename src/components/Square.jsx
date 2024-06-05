import React from 'react';
import '../tailwind.css';
import cross from '../assets/cross.svg';
import circle from '../assets/circle.svg';

const Square = ({ svg, onClick, additionalClasses, index}) => {
  const renderSVG = () => {
    if (svg === "cross") {
      return <img src={cross} alt="Cross" className="w-12 h-12 mx-auto p-0" />;
    } else if (svg === "circle") {
      return <img src={circle} alt="Circle" className="w-12 h-12 mx-auto p-0" />;
    }
    return null;
  };

  return (
    <button
      data-testid={`square-${index}`}
      className={`border-4 border-white dark:border-white ${!svg ? 'p-7' : 'p-1'} ${additionalClasses} hover:bg-sky-400/30 dark:hover:bg-sky-600/30`}
      onClick={onClick}
      disabled={!!svg} 
    >
      {renderSVG()}
    </button>
  );
};

export default Square;
