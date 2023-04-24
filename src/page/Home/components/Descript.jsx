import React from 'react';
import '../../../scss/descript.scss'

function Description() {
    return (
        
            <div className='Desciption-container'>
              <div className='Desciption-container__text'>
                <h1> <span>OMDb API</span><br/>
                THE OPEN<br/> MOVIE DATABASE
                </h1>
              </div>
              <p className='Desciption-container__bottomtext'> 
                The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
                <br/>If you find this service useful, please consider making a one-time donation or become a patron.<br/>
              </p>
            </div>
       
    );
};
export default Description