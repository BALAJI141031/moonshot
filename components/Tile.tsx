import Image from 'next/image'
    interface props {
      number: number
      image:string 
}
    

const Tile = ({ number, image }: props) => {
  console.log(image,"---------------")
  return (
    <div className={`w-[100px] h-[100px] flex justify-center items-center ${number % 2 == 0 ? 'bg-[#90b2b3]' : 'bg-[#20595A]'}`}><Image width={80}  height={80} src={image} alt='icon'/></div>
  )
}

export default Tile