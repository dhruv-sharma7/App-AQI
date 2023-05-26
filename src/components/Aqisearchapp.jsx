
import React, {useState} from 'react'
import { KEY } from './Citycredentials'
import axios from "axios"
import ForecastData from './ForecastData'


const Aqisearchapp= () => {


    const [city,setcity]=useState("")

    const [predictions, setpredictions]=useState({})

  const submitSearch = async(e) => {
    e.preventDefault();
    if (!city) {
        return; // Stop execution if the city is empty
      }
  
    let dataURL=`https://api.waqi.info/feed/${city}/?token=${KEY}`;

    let response =await axios.get(dataURL)
    
   setpredictions(response.data);
   console.log(response.data);
   
   
  
    
    }



  return (
   <>
   <div className="container mt-6">
<div className="row">
    
    <div className="col">

<p className="display-3 ">
AQI Search
</p>

<p className="lead font-weight-bold">
    Search place to see its AQI details
</p>

    </div>
    
    
    
    </div>


<div className="row">

<div className="col">

    <form className="form-inline" onSubmit={submitSearch}>



        <input style={{fontWeight: "bold"}}
        value={city}
        onChange={(e)=>setcity(e.target.value)}
        size="30"
        type="text"
        className="form-control"
        placeholder="Enter city"
        
        
        />
        <input type="submit"  value="Search"
        className="btn btn-secondary btn-sm"
        />
    </form>
</div>

</div>


   </div>
   <ForecastData data={predictions}/> 

   <div>



   </div>
   </>
  )
}

export default Aqisearchapp