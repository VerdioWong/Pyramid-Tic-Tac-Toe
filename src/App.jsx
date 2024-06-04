import React, { useState } from "react";
import Square from "./components/Square";
import RestartButton from "./components/Button";
import "./tailwind.css";

function App() {
  const initialSquaresState = Array(9).fill({ svg: null, isFilled: false });
  const [squares, setSquares] = useState(initialSquaresState);
  const [isCrossTurn, setIsCrossTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (newSquares) => {
    const lines = [
      [0, 2, 6],
      [1, 2, 3],
      [6, 7, 8],
      [4, 5, 6],
      [5, 6, 7],
      [0, 1, 4],
      [0, 3, 8],
    ];
    

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        newSquares[a].svg &&
        newSquares[a].svg === newSquares[b].svg &&
        newSquares[a].svg === newSquares[c].svg
      ) {
        return newSquares[a].svg;
      }
    }
    return null;
  };

  const checkDraw = (newSquares) => {
    return newSquares.every((square) => square.isFilled);
  };

  const handleButtonClick = (index) => {
    setSquares((prevSquares) => {
      if (prevSquares[index].isFilled) return prevSquares;

      const newSquares = prevSquares.map((square, i) =>
        i === index
          ? {
              svg: isCrossTurn ? "cross" : "circle",
              isFilled: true,
            }
          : square
      );
      
      const newWinner = checkWinner(newSquares);
      if (newWinner) {
        setWinner(newWinner);
      } else if (checkDraw(newSquares)){
        setIsDraw(true);
      }
      return newSquares;
    });

    setIsCrossTurn((prev) => !prev);
  };

  const handleRestart = () => {
    setSquares(initialSquaresState);
    setIsCrossTurn(true);
    setWinner(null);
    setIsDraw(false);
  };

  const renderSquare = (index, additionalClasses = "") => (
    <Square
      key={index}
      index={index}
      svg={squares[index].svg}
      onClick={() => handleButtonClick(index)}
      additionalClasses={additionalClasses}
    />
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-7xl text-white mt-2 mb-6 font-montserrat font-medium">
        Tic Tac Toe
      </h1>
      {!winner && !isDraw && (
      <h1 className="text-2xl text-sky-400 mb-8 font-montserrat font-medium">
        Player {isCrossTurn ? "X" : "O"} Turn
      </h1>
      )}
      <div className="flex flex-col items-center">
        <div className="flex">
          {renderSquare(0, "border-b-0 rounded-t-lg")}
        </div>
        <div className="flex">
          {renderSquare(1, "border-r-0 border-b-0 rounded-tl-lg")}
          {renderSquare(2, "border-r-0 border-b-0")}
          {renderSquare(3, "border-b-0 rounded-tr-lg")}
        </div>
        <div className="flex">
          {renderSquare(4, "border-r-0 rounded-l-lg mb-4")}
          {renderSquare(5, "border-r-0 mb-4")}
          {renderSquare(6, "border-r-0 mb-4")}
          {renderSquare(7, "border-r-0 mb-4")}
          {renderSquare(8, "rounded-r-lg mb-4")}
        </div>
      </div>
      {winner && (
        <h1 className="text-5xl text-sky-400 mt-4 font-montserrat font-medium">
          Player {winner === "cross" ? "X" : "O"} Wins!
        </h1>
      )}
      {isDraw && !winner && (
        <h1 className="text-5xl text-sky-400 mt-6 font-montserrat font-medium">
          It's a Draw!
        </h1>
      )}
      <RestartButton onRestart={handleRestart} />
    </div>
  );
}

export default App;
