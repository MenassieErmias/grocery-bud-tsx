import Grocery from './Grocery'
type propTypes = {
    groceries: { id: number, name: string }[],
    handleDelete: Function,
    handleClear: Function,
    setEditMode: Function,
    setEditId: Function
}

const Groceries = ({ groceries, handleDelete, handleClear, setEditMode, setEditId }: propTypes) => {
    return (
        <section className="groceries">
            {
                groceries.map((grocery, index) => {
                    return (
                        <Grocery setEditMode={setEditMode} setEditId={setEditId} handleDelete={handleDelete} grocery={grocery} key={index} />
                    )
                })
            }
            {
                groceries.length !== 0 &&
                <button className='clear-btn' onClick={() => handleClear()}>Clear All</button>
            }
        </section>
    )
}

export default Groceries