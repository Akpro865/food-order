import Head from 'next/head'
import Featured from '../components/Featured/Featured'
import FoodList from '../components/FoodList/FoodList'
import ImgSlide from '../components/ImgSlide/ImgSlide'

function Home() {
  return (
  	<>
      <Featured />
      <ImgSlide />
      <FoodList />
    </>
  )
}

export default Home