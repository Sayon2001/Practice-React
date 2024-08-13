import styles from './AddTodo.module.css'
function AddTodo() {
    return (
        <div className="container text-center">
            <div className="row my-row">
                <div className="col-4">
                    <input type="text" name="" id="" placeholder='Enter Todo Task Here.' />
                </div>
                <div className="col-4">
                    <input type="date" name="" id="" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success my-button">Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;