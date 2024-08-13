const ErrorMessage = ({ items }) => {
    return <>
        {items.length === 0 && <h1>No food items added yet.</h1>}
    </>
}

export default ErrorMessage;