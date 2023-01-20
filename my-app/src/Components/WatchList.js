import React, {Component} from "react";
import favourites from "./img/favourites.svg";
import popular from "./img/popular.svg";
import mover from "./img/Top-mover.svg";
import shares from "./img/shares.svg";
import crypto from "./img/crypto.svg";
import fx from "./img/fx1.svg";
import commodities from "./img/commodities.svg";
import weekend from "./img/weekend.svg";
import new_img from "./img/new.svg";
import './2Block.scss'

export default class WatchList extends Component {
    render() {
        return (
            <div className='section'>
                <div className='watchList'>
                    <p className='list'>WATCHLIST</p>
                    <div id='shares'>
                        <div className='point'>
                            <img src={favourites}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Favourites</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={popular}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Popular</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={mover}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Top Mover</a>
                        </div>
                    </div>

                    <div id='shares'>
                        <div className='point'>
                            <img src={shares}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item' id='share_point'>Shares</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={crypto}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Crypto</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={fx}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>FX</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={commodities}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Commodities</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={weekend}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>Weekend</a>
                        </div>
                    </div>
                    <div id='shares'>
                        <div className='point'>
                            <img src={new_img}
                                 height="22"
                                 width='22'
                                 className='icon'
                                 alt='image'
                            />
                            <a href='#' className='item'>New</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}