import React from 'react'
import BananaAndPicles from '../HeroComponents/BananaAndPicles/BananaAndPicles'
import Categories from '../HeroComponents/Categories/Categories'
import BestSellers from '../HeroComponents/BestSellers/BestSellers'
import PopularPicks from '../HeroComponents/PopularPicks/PopularPicks'
import WeeklyTopPurchases from '../HeroComponents/WeeklyTopPurchases/WeeklyTopPurchases'
import OffersAvailable from '../HeroComponents/OffersAvailable/OffersAvailable'
import HighestSold from '../HeroComponents/HighestSold/HighestSold'

function HomePage() {
  return (
    <div>
        <BananaAndPicles />
        <Categories/>
       <BestSellers/>
       <WeeklyTopPurchases/>
       <PopularPicks/>
        <OffersAvailable/>
        <HighestSold/>

    </div>
  )
}

export default HomePage