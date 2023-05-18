import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {

  const [endpoint, setEndpoint] = useState('day');
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  
  const handleTabChange = (tab: any) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={handleTabChange} />
      </ContentWrapper>
      <Carousel data={(data as any)?.results} loading={loading}/>
    </div>
  )
}

export default Trending