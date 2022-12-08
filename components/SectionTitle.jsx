
const SectionTitle = ({text, icon, boldText}) => {

  const mainTitle =    <div className='flex gap-2 py-4 '>
                        <span className='flex items-center justify-center w-8 h-8 bg-white rounded-full'>{icon ? icon : boldText}</span>
                        <h3 className='flex uppercase text-xl items-center justify-center text-white font-bold tracking-normal'>
                          {!!text && text}
                        </h3>
                      </div>

  const secTitle =  <div className='flex gap-2 py-4'>
                      {
                        boldText
                      ?
                        <span className='flex items-center justify-center  bg-white rounded-md uppercase text-xl font-semibold tracking-normal p-1'>
                          {boldText}
                        </span> 
                      :
                        null
                      }
                      <h3 className='flex uppercase text-lg items-center justify-center text-white font-semibold tracking-normal' >
                        {!!text && text}
                      </h3>
                    </div>

  return (
    icon ? mainTitle : secTitle
  )
}

export default SectionTitle;