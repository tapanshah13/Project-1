import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div>
            <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
                <a href={props.url}>
                    <button>View Menu</button>
                </a>
            </div>
        </div>
    )
}

export default Card