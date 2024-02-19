const HoverCard = ({title, desc}) => {
  return (
    <div className='card relative lg:text-xl rounded-xl p-10 h-auto font-mono flex flex-col gap-5 justify-between w-auto overflow-hidden text-black bg-white'>
      <div></div>
      <h1 className='  text-base left-2 xl:left-3 sm:text-xl  '>{title}</h1>
      <p className="text-sm  sm:text-base">{desc}</p>
      <span className=' left-4 xl:left-10  text-3xl xl:text-4xl top-28 xl:top-32 '>&#8594;</span>

    </div>
  )
}

export default HoverCard
