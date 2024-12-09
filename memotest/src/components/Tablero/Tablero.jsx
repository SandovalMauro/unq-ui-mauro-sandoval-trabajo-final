import images from '../../assets/images.js';
import dorso from '../../assets/dorso.jpg';
import './Tablero.css';
import {useEffect, useState} from "react";

const Tablero = () =>{
    const [pairImages, setPairImages] = useState([]);
    const [flipped, setFlipped] = useState([]);

    useEffect( () => {
        setPairImages([...images, ...images]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({...image, id: index, flipped: false, matched: false})))
    }, [])

    const handlerCard = (index) => {
        if (flipped.length === 2 || pairImages[index].flipped) return;

        const newPairImages = [...pairImages];
        newPairImages[index].flipped = true;
        setPairImages(newPairImages);


        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if(newFlipped.length === 2){
            const [firstFlipped, secondFlipped] = newFlipped;

            if(pairImages[firstFlipped].src === pairImages[secondFlipped].src){
                const updatePairImages = [...pairImages];
                updatePairImages[firstFlipped].matched = true;
                updatePairImages[secondFlipped].matched = true;
                setPairImages(updatePairImages);
            }

            setTimeout(() => {
                const resetTablero = [...pairImages];
                resetTablero[firstFlipped].flipped = false;
                resetTablero[secondFlipped].flipped = false;
                setPairImages(resetTablero);
                setFlipped([]);
            }, 1000);
        }
    }


    return(
        <div className="container">
            <h1>Memotest</h1>
            <div className="tablero-container">
                {pairImages.map((image, index) => (
                    <div
                        key ={image.id}
                        className={`card ${image.flipped ? 'flipped' : ''} ${image.matched ? 'matched' : ''}`}
                        onClick={() => handlerCard(index)}>
                        {image.flipped || image.matched ? (
                            <img className="image" src={image.src} alt="imagen" />
                        ) : (
                            <img className="dorso" src={dorso} alt="dorso" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tablero;