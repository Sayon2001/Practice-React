export default function TodoItem({ todoName, todoDate, onDeleteCLick }) {
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
                    <button type="button" className="btn btn-danger my-button" onClick={() => onDeleteCLick(todoName)}>Delete</button>
                </div>
            </div>
        </div>
    );
}