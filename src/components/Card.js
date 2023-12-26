// Imports
import './Card.css';
import AddCart from "./AddCart";

// Functions
const Card = (props) => {
    const classes = "card" 
    return (
        <div className="col-4">
            <div className={classes}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                {props.children}
            </div>
        </div>
    );

};

// Export
export default Card;