
type propTypes = {
    input: string,
    setInput: Function,
    handleSubmit: React.FormEventHandler<HTMLElement>,
    editMode: boolean,
    handleEdit: Function,
    editId: number
}

const Form = ({ input, setInput, handleSubmit, editMode, handleEdit, editId }: propTypes) => {

    return (
        <form className="input-container" onSubmit={!editMode ? (e: React.SyntheticEvent<HTMLFormElement>) => handleSubmit(e) : undefined}>
            <input
                type="text"
                className="input"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
            />
            <button type={editMode ? 'button' : 'submit'} onClick={editMode ? () => handleEdit(editId) : undefined} className="btn">{editMode ? 'Edit' : "Submit"}</button>
        </form>
    )
}

export default Form