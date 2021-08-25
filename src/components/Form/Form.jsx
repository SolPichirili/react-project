import './Form.css';

const Form = ({ change, submit, buyer }) => {

    return (
        <div>
            <form onChange={change} onSubmit={submit}>
                <input type="text" placeholder="Nombre" name="name" value={buyer.name}></input>
                <input type="text" placeholder="Teléfono" name="tel" value={buyer.tel}></input>
                <input type="email" placeholder="E-mail" name="email" value={buyer.email}></input>
                <button className="addButton">Enviar</button>
            </form>
        </div>
    )
}

export default Form;