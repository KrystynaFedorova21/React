import React, {Component} from "react";
import './header.scss'
import logo from './img/Logologo.svg'
import notice from './img/notificationnotice.svg'
import menu from './img/Side-bar-icons.svg'
import trade from './img/Side-bar-iconstrade.svg'
import portfolio from './img/Side-bar-iconsportfolio.svg'
import arrow from './img/Iconarrow.svg'

export default class Header extends Component {

    render() {
        return (<div className='header'>
                <div className='menu'>
                    <div className='images'><img src={menu}
                                                 alt='menu'
                                                 className='menu_point'/>
                        <img src={trade}
                             alt='trade'
                             className='trade'/>
                        <img src={portfolio}
                             alt='portfolio'
                             className='portfolio'/></div>
                </div>


                <div className='navbar'>
                    <img src={logo}
                         height='23'
                         width='180'
                         className='logo'
                         alt='logo'
                    />
                    <div className='right_side'>
                        <div className=' button'>
                            <div className='form'>Stacks &nbsp; <b> $1,500</b></div>
                            <img src={arrow}
                                 alt={arrow}
                                 className='arrow'/>
                        </div>
                        <button type="button" className="btn">Deposit</button>
                        <img src={notice}
                             height='14'
                             width='16'
                             className='notification'
                             alt='notification'
                        />
                    </div>

                </div>
            </div>
        )
    }

}


