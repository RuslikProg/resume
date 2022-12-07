import SectionTitle from '../components/SectionTitle';

const Article = ({icon, label, data, coloredText, miniIcon , startDate, endDate, activity, detaledData}) => {

  const minIconElement = <div className='flex items-center text-white'>
                            <span className='mr-2'>
                              {miniIcon}
                            </span>
                              {startDate} - {endDate}
                         </div>;

  const contactElement =  <div>
                            <p>
                              <span className='font-bold uppercase text-white mr-2'>
                                Location:
                              </span>
                              {detaledData?.basics?.location?.city}, {detaledData?.basics?.location?.countryCode}
                            </p>
                            <p>
                              <span className='font-bold uppercase text-white mr-2'>
                                Email:
                              </span>
                              {detaledData?.basics?.email}
                            </p>
                            <p>
                              <span className='font-bold uppercase text-white mr-2'>
                                Mobile:
                              </span>
                              {detaledData?.basics?.phone}
                            </p>
                            <p>
                              <span className='font-bold uppercase text-white mr-2'>
                                Birth date:
                              </span>
                              {detaledData?.basics?.birthDate}
                            </p>
                          </div>;
  return (
    <div className='flex flex-col gap-2 p-2'>
      <SectionTitle
        text={label}
        icon={icon}
        boldText={coloredText}
      />
      {!!miniIcon && minIconElement}
      <div className='text-md text-white'>
        {!!data && data }
        {!!detaledData && contactElement}
        <ul>
          {activity ? activity.map((e,i)=><li className='list-disc' key={i}>{e}</li>) : null}
        </ul>
      </div>
    </div>
  )
}

export default Article;