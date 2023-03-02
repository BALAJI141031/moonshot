import Tile from './Tile'
interface piece{
  image: string
  x: number
  y:number
}

const piceces: piece[] = [] 
for (let i = 0; i < 8; i++){
  piceces.push({ image: '/pawn_b.png', x: 1, y: i })
}
for (let j = 0; j < 8; j++){
  piceces.push({ image: '/pawn_w.png', x: 6, y: j })
}

piceces.push({ image: '/pawn_w.png', x:0, y:7 })

const Chessboard = () => {
  const verticalAxis = [8, 7, 6, 5, 4, 3, 2, 1]
  const  horizantalAxis = [1, 2, 3, 4, 5, 6, 7, 8]
  const board = verticalAxis.map((hA,j) =>
    horizantalAxis.map((vA,i) => {
      let image=''
      piceces.forEach(piece => {
        if (piece.x == j && piece.y ==i ) {
          image=piece.image
        }
      })
      // here he is adding 2 to i+j check y
      return <Tile key={vA} number={hA + vA} image={image} />
    })
    );
    return <div className="w-[800px] h-[800px] grid grid-cols-8">{board}</div>;
};

export default Chessboard;
