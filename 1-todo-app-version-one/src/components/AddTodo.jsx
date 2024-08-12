function AddTodo() {
    return (
        <div class="container text-center">
            <div class="row my-row">
                <div class="col-4">
                    <input type="text" name="" id="" placeholder='Enter Todo Task Here.' />
                </div>
                <div class="col-4">
                    <input type="date" name="" id="" />
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success my-button">Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;