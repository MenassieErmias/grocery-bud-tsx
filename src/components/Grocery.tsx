
type propTypes = {
    grocery: { name: string, id: number }
}

const Grocery = ({ grocery }: propTypes) => {
    return (
        <div className="grocery">
            <p className="grocery-name">{grocery.name}</p>
            <div className="buttons">
                <button className="edit-btn">-</button>
                <button className="delete-btn">x</button>
            </div>
        </div>
    )
}

export default Grocery