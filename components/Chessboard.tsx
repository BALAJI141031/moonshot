import React from "react";

const Chessboard = () => {
  const horizantalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const verticalAxis = [8,7,6,5,4,3,2,1];
  const board = verticalAxis.map((i) =>
     horizantalAxis.map((j) => <span className={`w-[50px] h-[50px] ${(i+j)%2==0?'bg-[white]':'bg-[black]'}`} key={j}>{[i, j]}</span>)
  );
    return <div className="bg-red-400 w-[400px] h-[400px] grid grid-cols-8">{board}</div>;
};

export default Chessboard;
