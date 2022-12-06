import { BsFillStarFill } from "react-icons/bs";
import {starsGerenerator} from '../utils/index';

const Skills = ({data, countStars, skillsLabel}) => {

  const stars = starsGerenerator(countStars)

  return (
    <div className='flex flex-col gap-4 '>
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row'> 
        {
           stars?.map((item,index)=> <BsFillStarFill color={'gold'} size={'1.5rem'} key={`${index}_star1`}/>)
        }        
        <h4 className='uppercase text-xl text-white font-bold ml-4'>{skillsLabel}</h4>
      </div>
      <div className='flex gap-1 flex-wrap'>
        {data?.map((e,i)=><p className='flex justify-center items-center flex-row gap-2 p-1 bg-[#2556dd] hover:bg-[#2556dda9] text-white rounded-lg text-[16px] font-semibold'  key={i}>{e}</p>)}
      </div>
    </div>
  </div>
  )
}

export default Skills;