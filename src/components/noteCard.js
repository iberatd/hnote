import React, { useState } from 'react';
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import "./noteCard.css";

const NoteCard = (cardData) => {
    const [showDetails, setShowDetails] = useState(false);
    const [cardWidth, setCardWidth] = useState(200);
    const [cardHeight, setCardHeight] = useState(100);

    
    const  cardStyle = {
        position: "absolute",
        border: "1px solid #ccc",
        padding: "10px",
        backgroundColor: "gray",
        borderRadius: "5px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
        if(!showDetails){
            setCardWidth(cardData.cardData.width);
            setCardHeight(cardData.cardData.height);
        }else
        {
            setCardWidth(200);
            setCardHeight(100);
        }
    };

    const deleteCard = () => {
        console.log("delete card");
        console.log(cardData);
    }

    const editCard = () => {
        console.log("edit card");
    }

    const resizeCard = (event, { size }) => {
        setCardWidth(size.width);
        setCardHeight(size.height);
        if(showDetails){
            cardData.cardData.width = size.width;
            cardData.cardData.height = size.height;
        }
    }

    return (
        <Draggable handle='.bar'>
            <Resizable 
                className = "Resizable"
                width={cardWidth} 
                height={cardHeight}
                onResize={resizeCard}>

                <div className="card" style={{...cardStyle, width: cardWidth, height: cardHeight }}>

                    <div className="bar" >
                        <button className = "modeButtons" onClick={toggleDetails}>-</button>
                        <button className = "modeButtons" onClick={editCard}>+</button>
                        <button className = "modeButtons" onClick={deleteCard}>x</button>
                    </div>

                    <h1>{cardData.cardData.title}</h1>
                    {showDetails && (
                        <div>
                            <h2>Details</h2>
                            <p>{cardData.cardData.content}</p>
                        </div>
                    )}
                </div>
            </Resizable>
        </Draggable>
    );
    };

    export default NoteCard;
