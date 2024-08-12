export function TodoItem1() {
    let todoName = 'Buy Milk';
    let todoDate = '13/08/2024';
    return (
        <div class="container">
            <div class="row my-row">
                <div class="col-4">
                    {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger my-button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export function TodoItem2() {
    let todoName = 'Go to College';
    let todoDate = '13/08/2024';
    return (
        <div class="container">
            <div class="row my-row">
                <div class="col-4">
                    {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger my-button">Delete</button>
                </div>
            </div>
        </div>
    );
}