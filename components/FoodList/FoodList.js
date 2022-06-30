import FoodCard from '../FoodCard/FoodCard'

function FoodList() {
  return (
  	<div className=''>
      <div className='p-5'>
       <h2 className='flex justify-center p-1 font-bold text-xl sm:text-3xl'>Find your favourite food</h2>
       <p className='mx-auto pt-4 text-xl sm:mx-16'>Food can be very transformational, and it can be more than just 
       about a dish. That’s what happened to me when I first went to France. I fell in love. 
       And if you fall in love, well, then everything is easy.</p>
      </div>
      <div className='p-2 flex flex-wrap justify-evenly'>
       <FoodCard />
       <FoodCard />
       <FoodCard />
       <FoodCard />
       <FoodCard />
       <FoodCard />
       <FoodCard />
       <FoodCard />
      </div>
    </div>
  )
}

export default FoodList