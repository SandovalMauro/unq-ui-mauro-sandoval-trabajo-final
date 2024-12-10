import dorso from "../../assets/dorso.jpg";
import './Tablero.css';

const Tablero = ({pairImages, handlerCard, tableroSize}) => {


    const getColumns = () => {
        return parseInt(tableroSize.charAt(0));
    };

    const columns = getColumns();

    return (
        <div className={`tablero-container-column-${columns}`}>
            {pairImages.map((image, index) => (
                <div
                    key={image.id}
                    className={`card ${image.flipped ? 'flipped' : ''} ${image.matched ? 'matched' : ''}`}
                    onClick={() => handlerCard(index)}>
                    {image.flipped || image.matched ? (
                        <img className="image" src={image.src} alt="imagen"/>
                    ) : (
                        <img className="dorso" src={dorso} alt="dorso"/>
                    )}
                </div>
            ))}
        </div>
    );

}

export default Tablero;