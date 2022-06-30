import styles from '../styles/cart.module.css'

function Cart() {
  return (
  	<div className='sm:flex'>
      <div className='sm:basis-3/4 p-4'>
        <table className='w-full'>
         <thead>
          <th>Product</th>
          <th>Name</th>
          <th>Extras</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
         </thead>
         <tbody>
          <tr className='p-2'>
           <td className='flex justify-center'><img src='/food3.png' className='h-12 w-12 sm:h-24 sm:w-24 object-cover object-center rounded-full ' /></td>
           <td className='text-center'>Paneer pizza</td>
           <td className='text-center'>double, cheese</td>
           <td className='text-center'>$ 45.8</td>
           <td className='text-center'>2</td>
           <td className='text-center'>$ 99.8</td>
          </tr>
          <tr>
           <td className='flex justify-center'><img src='/food3.png' className='h-12 w-12 sm:h-24 sm:w-24 object-cover object-center rounded-full ' /></td>
           <td className='text-center'>Paneer pizza</td>
           <td className='text-center'>double, cheese</td>
           <td className='text-center'>$ 45.8</td>
           <td className='text-center'>2</td>
           <td className='text-center'>$ 99.8</td>
          </tr>
          <tr>
           <td className='flex justify-center'><img src='/food3.png' className='h-12 w-12 sm:h-24 sm:w-24 object-cover object-center rounded-full ' /></td>
           <td className='text-center'>Paneer pizza</td>
           <td className='text-center'>double, cheese</td>
           <td className='text-center'>$ 45.8</td>
           <td className='text-center'>2</td>
           <td className='text-center'>$ 99.8</td>
          </tr>

         </tbody>
        </table>
      </div>
      <div className='sm:basis-1/4'>
       <div className='bg-black text-white p-4 m-3 rounded-xl'>
           <h2 className='font-bold text-xl py-2 flex justify-center'>CART TOTAL</h2>
	       <div className='flex justify-center py-1 xl:py-2'>
	         <span  className='mr-3 font-semibold'>Subtotal:</span>
	         <span>$ 200.2</span>
	       </div>
	       <div className='flex justify-center py-1 xl:py-2'>
	         <span className='mr-3 font-semibold'>Discount:</span>
	         <span>$ 22.0</span>
	       </div>
	       <div className='flex justify-center py-1 xl:py-2'>
	         <span className='mr-3 font-semibold'>Total:</span>
	         <span>$ 180.2</span>
	       </div>
	       <div className='flex justify-center py-1 xl:py-2'>
	         <button className='bg-green-600 border-none outline-none cursor-pointer py-2 px-3 font-bold rounded px-2'>Checkout Now</button>
	       </div>
       </div>
      </div>
    </div>
  )
}

export default Cart