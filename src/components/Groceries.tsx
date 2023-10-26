import Grocery from './Grocery'
type propTypes = {
    groceries: { id: number, name: string }[],
    handleDelete: Function
}

const Groceries = ({ groceries, handleDelete }: propTypes) => {
    return (
        <section className="groceries">
            {
                groceries.map((grocery, index) => {
                    return (
                        <Grocery handleDelete={handleDelete} grocery={grocery} key={index} />
                    )
                })
            }
        </section>
    )
}

export default Groceries