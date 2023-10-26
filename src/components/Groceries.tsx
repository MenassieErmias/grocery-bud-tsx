import Grocery from './Grocery'
type propTypes = {
    groceries: { id: number, name: string }[],

}

const Groceries = ({ groceries }: propTypes) => {
    return (
        <section className="groceries">
            {
                groceries.map((grocery, index) => {
                    return (
                        <Grocery grocery={grocery} key={index} />
                    )
                })
            }
        </section>
    )
}

export default Groceries