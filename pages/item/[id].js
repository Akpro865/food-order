import styles from '../../styles/item.module.css'
import { useState } from 'react'

function ItemDetail() {
	const [size, setSize] = useState(0)
	const pizza = {
		id: 1,
		img: '/food3.png',
		name: 'Cheese Pizza',
		price: [25.4, 44.5, 78.2],
		desc: 'Food can be very transformational, and it can be more than just about a dish. That’s what happened to me when I first went to France.'
	}
  return (
  <div className={`sm:flex p-5`}>
  	<div className='flex justify-center items-center basis-1/2'>
  	    <img src={pizza.img} className='p-2'/>
  	</div>
  	<div className='basis-1/2 p-3'>
  	   <h2 className='py-3 text-3xl font-bold'>{pizza.name}</h2>
  	   <span className='text-app-color text-xl py-4 font-semibold'>$ {pizza.price[size]}</span>
  	   <p className='py-3 text-xl'>{pizza.desc}</p>
       <h3 className='text-xl font-semibold py-2'>Choose the size</h3>
       <div className='flex py-3'>
        <div className='flex justify-evenly'>
         <div className='relative cursor-pointer' onClick={() =>setSize(0)}>
           <img src='/size.png' className={`${styles.sizeImg} w-12 h-12`} />
           <span className='absolute top-0 -right-5 px-2 bg-green-500 rounded-full text-sm text-white'>small</span>
         </div>
         <div className='relative cursor-pointer' onClick={() =>setSize(1)}>
           <img src='/size.png' className={`${styles.sizeImg} w-16 h-16 ml-5`} />
           <span className='absolute top-0 -right-5 px-2 bg-green-500 rounded-full text-sm text-white'>medium</span>
         </div>
         <div className='relative cursor-pointer' onClick={() =>setSize(2)}>
           <img src='/size.png' className={`${styles.sizeImg} w-20 h-20 ml-5`} />
           <span className='absolute top-0 -right-5 px-2 bg-green-500 rounded-xl text-sm text-white'>large</span>
         </div>
        </div>
       </div>
       <h3 className='text-xl font-semibold py-2'>Choose Additional Ingrediants</h3>
       <div className='py-3 flex flex-col sm:flex-row text-sm'>
         <div className='flex ml-2 py-2 items-center'>
           <input type='checkbox' id='double' name='double' className='h-5 w-7'/>
           <label htmlFor='double'>double</label>
         </div>
         <div className='flex ml-2 py-2 items-center'>
           <input type='checkbox' id='cheese' name='cheese' className='h-5 w-7'/>
           <label htmlFor='cheese'>cheese</label>
         </div>
         <div className='flex py-2 ml-2 items-center'>
           <input type='checkbox' id='garlic' name='garlic' className='h-5 w-7'/>
           <label htmlFor='garlic'>garlic</label>
         </div>
         <div className='flex ml-2 py-2 items-center'>
           <input type='checkbox' id='spicy' name='spicy' className='h-5 w-7'/>
           <label htmlFor='spicy'>sauce</label>
         </div>
       </div>
       <div className='py-5'>
         <input type='number' defaultValue={1} className='h-10 w-16 outline-none border p-1 rounded text-center text-black'/>
         <button className='py-2 cursor-pointer px-4 ml-5 rounded font-bold text-white bg-app-color'>Add to cart</button>
       </div>
  	</div>
   </div>
  )
}

export default ItemDetail