

import React from 'react'

const ForecastData = ({data}) => {
    if (!data || !data.data || !data.data.city) {
        return null; // or render a placeholder, an error message, or return a loading state
      }
    


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
        
    <div className="card" >
  <div className="card-header">
    
  </div>

  <ul className="list-group list-group-flush">
    <li className="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Location
            </span>
            <span>

{data.data.city.name ?? 'Not Availiable'}
            </span>
        </div>
    </li>
    <li className="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Last Updated
            </span>
            <span>
               
                {data.data.time.s?? 'Not Availiable'}
                
            </span>
        </div>
    </li>


    <li className="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
AQI
            </span>
            <span>
              

                {data.data.aqi?? 'Not Availiable'}
                
            </span>
        </div>
    </li>


    <li className="list-group-item">
        <div className="d-flex justify-content-between">
            <span>
Dew
            </span>
            <span>
                

                {data.data.iaqi.dew.v?? 'Not Availiable'}
                
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