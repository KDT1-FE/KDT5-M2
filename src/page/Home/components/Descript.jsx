import React from 'react';
import '../../../scss/home/components/description.scss'

function Description() {
    return (
      <div className='container'>
        <div className= "Desciption">
          <div className='Desciption-container__text'>
            <h1>
              <span>OMDb API</span><br/>
              THE OPEN MOVIE DATABASE<br/>
            </h1>
          </div>
            <p className='Desciption-container__bottomtext'> 
              The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
              If you find this service useful, please consider making a one-time donation or become a patron.<br/>
            </p>
        </div>
      </div>
    );
}
export default Description