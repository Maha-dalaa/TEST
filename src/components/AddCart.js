//imports

//function
const AddCart = (props) => {
    const btnTitle = (props.title) ? props.title : "Add to cart"
    return (
        <button type="button" className="btn btn-outline-dark">{btnTitle}</button>
    );
};

export default AddCart;