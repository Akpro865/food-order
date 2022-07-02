import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured/Featured'
import FoodList from '../components/FoodList/FoodList'
import ImgSlide from '../components/ImgSlide/ImgSlide'

function Home({items}) {
  return (
  	<>
      <Featured />
      <ImgSlide />
      <FoodList items={items}/>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/Items')
	const items = res.data
	return {
		props: {
		  items
	   }
	}	
}