
type propTypes = {
    input: string,
    setInput: Function,
    handleSubmit: React.FormEventHandler<HTMLElement>
}

const Form = ({ input, setInput, handleSubmit }: propTypes) => {

    return (
        <form className="input-container" onSubmit={(e: React.SyntheticEvent<HTMLFormElement>) => handleSubmit(e)}>
            <input
                type="text"
                className="input"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
            />
            <button type='submit' className="btn">Submit</button>
        </form>
    )
}

export default Form