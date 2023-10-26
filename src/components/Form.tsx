
type propTypes = {
    input: string,
    setInput: Function,
    handleSubmit: Function
}

const Form = ({ input, setInput, handleSubmit }: propTypes) => {

    return (
        <section className="input-container">
            <input
                type="text"
                className="input"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
            />
            <button className="btn" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(event)}>Submit</button>
        </section>
    )
}

export default Form