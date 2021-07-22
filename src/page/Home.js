import React from 'react';
import './Home.css';
import { dataElements } from '../data';
import Title from '../components/Title';
import Image from '../components/Image';


export default function Home() {
    return (
        <>
        <div className="home-container" id="home-container">
            <div className="title-container">
            {dataElements.map(({title}, index)=>(   
                    <Title
                        key={index}
                        title={title}
                        index={index}    
                    />

                ))}
            </div>
            <div className="image-container"></div>    
        </div>     
        </>
    )
}
