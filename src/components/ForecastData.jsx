

import React from 'react'

const ForecastData = ({data}) => {
  return (
    <>

  <div className="container mt-3">
<div className="row " >
    <div className="col text-center">
        <p className='h5 text-primary text-centre'> Current AQI Details</p>
    </div>
</div>


 <div className="row">
    <div className="col">
        
    <div class="card" >
  <div class="card-header">
    
  </div>

  <ul className="list-group list-group-flush">
    <li class="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Location
            </span>
            <span>
{data.data.city.name}
            </span>
        </div>
    </li>
    <li class="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Last Updated
            </span>
            <span>
                {data.data.time.s}
                
            </span>
        </div>
    </li>


    <li class="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
AQI
            </span>
            <span>
                {data.data.aqi}
                
            </span>
        </div>
    </li>


    <li class="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Dew
            </span>
            <span>
                {data.data.iaqi.dew.v}
                
            </span>
        </div>
    </li> 
  

  

   


  </ul>
</div>


    </div>


    </div> 
    </div>


    </>
  )
}

export default ForecastData