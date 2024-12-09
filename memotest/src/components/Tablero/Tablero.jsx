import images from '../../assets/images.js';
import dorso from '../../assets/dorso.jpg';
import './Tablero.css';
import {useEffect, useState} from "react";

const Tablero = () =>{
    const [pairImages, setPairImages] = useState([]);

    useEffect( () => {
        setPairImages([...images, ...images]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({...image, id: index, flipped: false})))
    }, [])

    const handlerCard = (index) => {
        const newPairImages = [...pairImages];
        newPairImages[index].flipped = !newPairImages[index].flipped;
        setPairImages(newPairImages);
    }


    return(
        <div className="container">
            <h1>Memotest</h1>
            <div className="tablero-container">
                {pairImages.map((image, index) => (
                    <div className="card-container">
                        {image.flipped ? <img className="card-image" src={image.src} alt="imagen" key={image.id}/>
                            :
                            <img className="card-image" src={dorso} alt="imagen" key={image.id} onClick={() => handlerCard(index)}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tablero;