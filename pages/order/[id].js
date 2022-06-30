import styles from '../../styles/order.module.css'
import Image from "next/image";

function Order() {
   const status = 0;

   const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
  	<div className='sm:flex'>
      <div className='sm:basis-3/4 p-4'>
        <table className='w-full'>
         <thead>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Address</th>
          <th>Total</th>
         </thead>
         <tbody>
          <tr className='p-2'>
           <td className='text-center'>546738327298</td>
           <td className='text-center'>Priya</td>
           <td className='text-center'>Panama, 21-2 KE</td>
           <td className='text-center'>$ 320.3</td>
          </tr>          
         </tbody>
        </table>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png" width={20} height={20} alt="" />
            </div>          
          
        </div>
        </div>
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

export default Order