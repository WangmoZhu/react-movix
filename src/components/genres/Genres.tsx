import React from 'react'
import './style.scss'

import { useSelector } from 'react-redux'

const Genres = ({ data }: any) => {

  const { genres } = useSelector((state: any) => state.home);

  return (
    <div className='genres'>
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        )
      })}
    </div>
  )
}

export default Genres