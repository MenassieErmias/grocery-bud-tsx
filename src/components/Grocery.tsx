
type propTypes = {
    grocery: { name: string, id: number },
    handleDelete: Function,
    setEditId: Function,
    setEditMode: Function
}

const Grocery = ({ grocery, handleDelete, setEditId, setEditMode }: propTypes) => {
    return (
        <div className="grocery">
            <p className="grocery-name">{grocery.name}</p>
            <div className="buttons">
                <button className="edit-btn" onClick={() => { setEditId(grocery.id); setEditMode(true) }}>-</button>
                <button className="delete-btn" onClick={() => handleDelete(grocery.id)}>x</button>
            </div>
        </div>
    )
}

export default Grocery;