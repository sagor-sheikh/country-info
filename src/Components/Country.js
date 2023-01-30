import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SingleCountry from './SingleCountry';
import "./country.css";

const Country = (props) => {


    return (
        <section className='countries'>
            {
                props.country.map((country) => {
                    const countryNew = {country, id: uuidv4() }
                    return <SingleCountry {... countryNew} key={countryNew.id} onRemoveCountry={props.handeRemoveCountry}/>
                })
                
            }
        </section>
    );
};

export default Country;