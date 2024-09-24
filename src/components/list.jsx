import React from "react";
import Card from "./card";
import { useState, useEffect } from "react";
import CardData from "../../public/cardData.json"

const List = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardData);
    }, []);

    console.log(cards)
  
    return (
        <div className="container">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} subtitle={card.subtitle} image={card.image} url={card.url} />
            ))}
        </div>
    )
}

export default List