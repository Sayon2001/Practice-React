export default function TodoItem({ todoName, todoDate }) {
    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-4">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger my-button">Delete</button>
                </div>
            </div>
        </div>
    );
}