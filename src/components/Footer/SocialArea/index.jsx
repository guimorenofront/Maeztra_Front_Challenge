import Maeztra from '../../../assets/social/Maeztra.png'
import Vtex from '../../../assets/social/vtex.png'
import facebook from '../../../assets/social/facebook.svg'
import instagram from '../../../assets/social/Instagram.svg'
import youtube from '../../../assets/social/youtube.svg'
import linkedin from '../../../assets/social/linkedin.svg'

import visa from '../../../assets/social/visa.svg'
import master from '../../../assets/social/master.svg'

import './index.scss'
export const SocialArea = () => {
    return (
        <div className='SocialArea'>
            <div className='Generic'>
                <img src={facebook} alt="facebook"/>
                <img src={linkedin} alt="linkedin"/>
                <img src={instagram} alt="instagram"/>
                <img src={youtube} alt="youtube"/>
            </div>
            <div className='Generic'>
                <img src={visa} alt="Visa"/>
                <img src={master} alt="Master"/>
                <img src={visa} alt="Visa"/>
                <img src={master} alt="Master"/>
            </div>
            <div className='Powered'>
                <div>
                    <span>Powered by: </span>
                    <img src={Vtex} alt="Vtex" />
                </div>
                <div>
                    <span>Powered by: </span>
                    <img src={Maeztra} alt="Maeztra" />
                </div>
            </div>
        </div >
    )
}