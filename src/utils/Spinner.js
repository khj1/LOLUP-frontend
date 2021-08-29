
import React from 'react'
import Loader from "react-loader-spinner";

function Spinner() {
    return (
        <div style= {{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'    
        }}>
            
            <Loader type="Oval" color="#3d66ba" height={200}/>
        
        </div>
    )
}

export default Spinner;
