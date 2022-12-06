import { VscFilePdf } from "react-icons/vsc";
import Link from 'next/link';

const Header = ({data}) => {
  return (
    <div className="flex justify-between flex-wrap items-center p-2 py-[50px] border-b-2">
      <div className="flex flex-col gap-6">
        <h1 className="uppercase text-4xl text-white font-black">{data.basics.name}</h1>
        <h2 className="uppercase text-2xl text-white font-extrabold">{data.basics.label}</h2>
      </div>
      <div>
        <Link 
          download
          href="../public/CV Kvachuk Ruslan .pdf"
          target='_blank'
          className="flex justify-center items-center flex-row mt-4 gap-2 cursor-pointer w-[200px] h-[50px] bg-[#2556dd] hover:bg-[#2556dda9] text-white rounded-lg text-[16px] font-semibold">
          <VscFilePdf/>
          View or Download CV
        </Link>
      </div>
    </div>
  )
}

export default Header