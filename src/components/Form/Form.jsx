import './Form.css';

const Form = ({ change, submit, buyer }) => {

    return (
        <div className="flex">
            <form onChange={change} onSubmit={submit}>
                <input type="text" placeholder="Nombre" name="name" defaultValue={buyer.name}></input>
                <input type="text" placeholder="Teléfono" name="tel" defaultValue={buyer.tel}></input>
                <input type="email" placeholder="E-mail" name="email" defaultValue={buyer.email}></input>
                <input type="email" placeholder="Repita su e-mail" name="email2" defaultValue={buyer.email2}></input>
                {buyer.name && buyer.tel && buyer.email && buyer.email2 !== '' && buyer.email === buyer.email2 && (
                    <button className="addButton">Realizar compra</button>
                )}
                {buyer.email !== buyer.email2 && (
                    <h2 className="warning">Por favor verique su correo electrónico.</h2>
                )}
            </form>
        </div>
    )
}

export default Form;