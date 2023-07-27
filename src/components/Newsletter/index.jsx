import './index.scss'

const NS = () => {
    return (
        <div className='Newsletter'>
            <p>
                Recebe Nossa Newsletter
            </p>
            <div className='InputBox'>
                <input placeholder='Digite seu e-mail' type="text" />
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default NS