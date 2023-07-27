import React from "react";
import MenuIconMobile from '../../Svg-icons/MenuIconMobile/MenuIconMobile';
import logo from '../../../assets/Logo.png'
import HeaderSearchIcon from '../../Svg-icons/Header-SearchIcon'
import MiniCartIcon from "../../Svg-icons/Header-MinicartIcon";
import '../index.scss'
const HeaderMobile = () => {
    return (
        <div className="Header__Mobile">
            <div>
                <MenuIconMobile />
                <img src={logo} alt="Logo Maeztra" />
            </div>
            <div>
                <HeaderSearchIcon />
                <MiniCartIcon />
            </div>
        </div>
    )
}

export default HeaderMobile;