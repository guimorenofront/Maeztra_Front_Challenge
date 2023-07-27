import maeztraIcon from '../../../assets/Logo.png'
import cart from '../../../assets/HeaderIcons/User.svg'
import Fav from '../../../assets/HeaderIcons/Fav.svg'
import user from '../../../assets/HeaderIcons/cart.svg'
import nov from '../../../assets/HeaderIcons/icon-dress.svg'
const HeaderDesk = () => {
    return (
        <header>
            <div className='HeaderContainerDesktop'>
                <div className='Logo'>
                    <img src={maeztraIcon} alt='Sim' />
                </div>
                <div className='Searchbar'>
                    <input placeholder='Oque você busca ?' type="text" />
                    <button>Buscar</button>
                </div>
                <div className='UserButtons'>
                    <button> <img src={user} alt="" /> Minha Conta</button>
                    <button><img src={Fav} alt="" /> Minha Conta</button>
                    <button> <img src={cart} alt="" /> Meu Carrinho</button>
                </div>
            </div>
            <div className='SubHeaderBar'>
                <div>
                    <a href="#"><img src={nov} alt="icon" />Novidades</a>
                    <a href="#">Vestidos</a>
                    <a href="#">Roupas</a>
                    <a href="#">Sapatos</a>
                    <a href="#">Lingerie</a>
                    <a href="#">Acessórios</a>
                    <a href="#">OUTLET</a>
                </div>
            </div>
        </header>
    )
}

export default HeaderDesk