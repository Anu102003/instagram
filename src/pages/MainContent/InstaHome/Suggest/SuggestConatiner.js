import React from 'react'
import "./suggest.scss"
import { Suggestlist } from '../../../../assets/components/SuggestList/Suggestlist'
import { UserDetails } from '../../../../database/db'
export const SuggestConatiner = () => {
  return (
    <>
      <div className='home-container'>
        <div>
          <h4 className='suggest-head'>Suggested </h4>
          <div className='home-wrapper'>
            {
              UserDetails.map(e => (
                <Suggestlist userdata={e} />
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}
