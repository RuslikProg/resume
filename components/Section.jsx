import SectionTitle from '../components/SectionTitle';
import { BsPersonCircle, BsCheckLg, BsFillCalendarEventFill} from "react-icons/bs";
import { MdAddReaction } from "react-icons/md";
import { FaUniversity, FaLanguage } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import Skills from '../components/Skills';
import Article from '../components/Article';
import Image from 'next/image';
import photoSRC from '../public/main_photo.jpg';
import icons from '../utils/icons';

const Section = ({data}) =>{

  return (
    <section className='p-2 mt-[50px]'>
      <div className='flex flex-wrap gap-6'>
        <div className='flex items-center gap-8 flex-wrap'>
          <div className='flex p-2 mx-auto sm:mx-0'>
            <Image
              alt='Main_Photo'
              src={photoSRC}
              className='rounded-full object-cover'
            />
          </div>
          <Article
            icon={<RiContactsLine/>}
            label={'Contact Information'}
            detaledData={data}
          />
          <Article
            icon={<BsPersonCircle/>}
            label={'About me'}
            data={data?.basics?.summary}
          />
          <div className='mb-2 p-2'>
          <SectionTitle
            text={'Languages'}
            icon={<FaLanguage/>}
          />
          {
            data?.languages?.map((e,i)=>{
              return <div key={i}>
                        <p className='text-white'>
                          <span className='font-semibold uppercase text-white mr-2'>
                            {e.lang} :
                          </span> 
                          {e.type}
                        </p>
                     </div>
            })
          }
          </div>
        </div>
        <div className='w-full p-2'>
          <SectionTitle
            text={'Skills'}
            icon={<BsCheckLg/>}
          />
          <div className='flex justify-between flex-wrap gap-8 lg:gap-52 pb-4 border-b-2'>
            <Skills
              data={data?.skills?.advanced}
              countStars={5}
              skillsLabel={'Already use'}
            />
            <Skills
              data={data?.skills?.medium}
              countStars={3}
              skillsLabel={'In progress'}
            />
          </div>
        </div>
      </div>
      <div className='flex mt-8 p-2'>
        <SectionTitle
          text={'Professional Experience'}
          icon={<MdBusinessCenter/>}
        />
      </div>
      <div className='flex flex-col flex-wrap justify-between pb-4 border-b-2'>
        {data?.work?.map((e,i)=>{
          return <Article
                    key={i}
                    label={'at '+e?.name}
                    coloredText={e?.position}
                    miniIcon={<BsFillCalendarEventFill/>}
                    startDate={e?.startDate}
                    endDate={e?.endDate}
                    activity={e?.activity}
          />
        })}
      </div>
      <div className='flex mt-8 p-2'>
        <SectionTitle
          text={'Education'}
          icon={<MdBusinessCenter/>}
        />
      </div>
      <div className='flex flex-col flex-wrap justify-between pb-4 border-b-2'>
        {data?.education?.map((e,i)=>{
          return <Article
                    key={i}
                    label={' '+e?.institution}
                    coloredText={e?.studyType}
                    miniIcon={<FaUniversity/>}
                    startDate={e?.startDate}
                    endDate={e?.endDate}
                    data={e?.area}
          />
        })}
      </div>
      <div className='flex mt-8 p-2'>
        <SectionTitle
          text={'Hobbies & Interests'}
          icon={<MdAddReaction/>}
        />
      </div>
      <div className='flex flex-col flex-wrap justify-between pb-4 border-b-2'>
        {data?.interests?.map((e,i)=>{
          return <Article
                    key={i}
                    label={icons[e?.name]}
                    coloredText={e?.name}
                    data={e?.description}
          />
        })}
      </div>
    </section>
  )
}

export default Section;