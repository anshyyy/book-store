import React from 'react'
import MainHome from './MainHome'
import BookLists from './BookLists'
import LearningBanner from './LearningBanner'
import BookCategories from '../components/BookCategories'
import FeaturedCollection from './FeaturedCollection'
const MainContainer = () => {
  return (
    <>
        <MainHome />
        <BookLists />
        <LearningBanner />
        <FeaturedCollection />
        <BookCategories />
    </>
  )
}

export default MainContainer