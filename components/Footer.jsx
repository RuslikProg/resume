import Link from 'next/link';
import icons from '../utils/icons';

const Footer = ({data}) => {
  return (
    <div className="flex flex-row gap-4 justify-center pb-4 py-6">
      {data?.map((e,i)=>{
        return  <Link 
                  key={i}
                  href={e.url}>
                      <span className='flex items-center justify-center w-[3rem] h-[3rem] bg-[#2556dd] rounded-full'>
                        {icons[e.network]}
                      </span>
        </Link>   
      })}
    </div>
  )
}

export default Footer;