import React from 'react'
import { Link } from 'react-router-dom'

function Vampire({vamp, id}) {

  return (
    <div className='vampireCard'>
      <div className='vampireDetails'>
        <Link to={`/vamps/${id}`}>
          <p>Vampire Name: {vamp.name}</p>
        </Link>
        <p>Date Bitten: {vamp.date_turned}</p>
        <p>Location: {vamp.location}</p>
        <p>Age: {vamp.age} </p>
        <p>Main Diet: {vamp.main_diet}</p>
        <p>Ability: {vamp.power}</p>
        <p>Dangerous: {vamp.dangerous}</p>
        <p>Date Documented: {vamp.date_documented}</p>
      </div>
    </div>
  )
}

export default Vampire
