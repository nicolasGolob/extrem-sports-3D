import React,{useState} from 'react';
import './Home.css';
import { dataElements } from '../data';
import Title from '../components/Title';
import Image from '../components/Image';


export default function Home() {
    const [rotationPosition, setRotation] = useState(new Array(dataElements.length).fill(0));
    // Start index, default value is 0.
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleSetRotation = (itemIndex)=>{
        const newImageRotation = Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1);
        // recall round will round up, and randomly return either 0 or 1 
        const temporaryState = [...rotationPosition];
        temporaryState[itemIndex]=newImageRotation;
        // we define a new rotation from this element
        setRotation(temporaryState);
        setActiveIndex(itemIndex);
    }
    return (
        <>
        <div className="home-container" id="home-container">
            <div className="title-container">
            {dataElements.map(({title}, index)=>(   
                    <Title
                        key={index}
                        title={title}
                        index={index}    
                        setRotation={handleSetRotation}
                        setIndex={setActiveIndex}
                    />

                ))}
            </div>
            <div className="image-container">
            {dataElements.map(({image}, index)=>(   
                    <Image
                        key={index}
                        image={image}
                        active={activeIndex ===index}
                        rotationPosition={rotationPosition[index]}    
                    />
                ))}</div>    
        </div>     
        </>
    )
}
