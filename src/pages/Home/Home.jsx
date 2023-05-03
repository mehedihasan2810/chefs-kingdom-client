import Categories from "../../components/Categories/Categories"
import Chefs from "../../components/Chefs/Chefs"
import FeaturedCuisines from "../../components/FeaturedCuisines/FeaturedCuisines"
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return (
    <div>
        <Slider/>
        <Chefs/>
        <FeaturedCuisines/>
        <Categories/>
    </div>
  )
}

export default Home