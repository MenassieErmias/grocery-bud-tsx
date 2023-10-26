
type propTypes = {
    grocery: { name: string, id: number },
    handleDelete: Function
}

const Grocery = ({ grocery, handleDelete }: propTypes) => {
    return (
        <div className="grocery">
            <p className="grocery-name">{grocery.name}</p>
            <div className="buttons">
                <button className="edit-btn">-</button>
                <button className="delete-btn" onClick={() => handleDelete(grocery.id)}>x</button>
            </div>
        </div>
    )
}

export default Grocery;