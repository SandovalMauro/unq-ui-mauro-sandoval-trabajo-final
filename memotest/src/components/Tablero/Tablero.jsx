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

    const handlerCard = (e) => {

    }


    return(
        <div className="container">
            <h1>Memotest</h1>
            <div className="tablero-container">
                {pairImages.map((image) => (
                    <div className="card-container">
                        {image.flipped ? <img className="card-image" src={image.src} alt="imagen" key={image.id} onClick={handlerCard}/>
                            :
                            <img className="card-image" src={dorso} alt="imagen" key={image.id} onClick={handlerCard}/>}
                        {/*<img className="card-image" src={image.src} alt="imagen" key={image.id}
                              onClick={handlerCard}/>*/}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tablero;