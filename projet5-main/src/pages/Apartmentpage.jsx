import React from 'react'
import "./Apartmentpage.scss"
import ApartmentCard from "../components/ApartmentCard/ApartmentCard"

function Apartmentpage() {
  return (
    <div className='apartement-page'> 
        <div>
            <ApartmentCard/>
        </div>
        <div className='apartement_title'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Ile-de-France</h2>
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
        </div>
        <div className='apartement_owner'>
            <h3>Alexandre Dumas</h3>
            <div className='badge'>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Apartmentpage;