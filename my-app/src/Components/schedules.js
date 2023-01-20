import search from './img/Iconsearch.svg'
import blue from './img/Group158blue.svg'
import React, {Component} from "react";
import './schedules.scss'

export default class Schedules extends Component {
    render() {
        return (
            <div >
                <div className='schedules'>
                    <div className='search'>
                        <img src={search}
                             height='12'
                             width='12'
                             alt='search image'
                        />
                        <p className='search_name'>Search</p>

                    </div>
                    <div className='blocks'>
                        <div className='column1'>
                            <p className='title'>AAPL</p>
                            <p className='sm_text'>Apple Inc.</p>
                        </div>
                        <div className='column2'>
                            <p className='percent'>+0,39%</p>
                            <img className='chart'
                                 src={blue}
                                 alt='chart'/>
                        </div>
                        <div className='price'>$1488,90</div>
                    </div>
                    <div className='blocks'>
                        <div className='column1'>
                            <p className='title'>AAPL</p>
                            <p className='sm_text'>Apple Inc.</p>
                        </div>
                        <div className='column2'>
                            <p className='percent'>+0,39%</p>
                            <img className='chart'
                                 src={blue}
                                 alt='chart'/>
                        </div>
                        <div className='price'>$1488,90</div>
                    </div>
                    <div className='blocks'>
                    <div className='column1'>
                        <p className='title'>AAPL</p>
                        <p className='sm_text'>Apple Inc.</p>
                    </div>
                    <div className='column2'>
                        <p className='percent'>+0,39%</p>
                        <img className='chart'
                             src={blue}
                             alt='chart'/>
                    </div>
                    <div className='price'>$1488,90</div>
                </div>

                </div>
            </div>)


    }
}