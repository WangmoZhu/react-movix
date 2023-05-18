import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
const TopRated = () => {

  const [endpoint, setEndpoint] = useState('movie');
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  
  const handleTabChange = (tab: any, index: any) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={handleTabChange} />
      </ContentWrapper>
      <Carousel data={(data as any)?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated