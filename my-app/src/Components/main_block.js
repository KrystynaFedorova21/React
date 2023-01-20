import alert from './img/alertalert.svg'
import star from './img/Iconstar.svg'
import settings from './img/Frame965settings.svg'
import char from './img/Frame966char.svg'
import minus from './img/Group912minus.svg'
import plus from './img/Group911plus.svg'
import chart from './img/Chartchart.svg'
import question from './img/information.svg'
import bear from './img/Groupbear.svg'
import ox from './img/Groupox.svg'
import first from './img/unsplash_7I5A7630GpY1.svg'
import second from './img/unsplash_7I5A7630GpY2.svg'
import third from './img/unsplash_7I5A7630GpY3.svg'
import fourth from './img/unsplash_7I5A7630GpY4.svg'
import fives from './img/unsplash_7I5A7630GpY5.svg'
import sixth from './img/unsplash_7I5A7630GpY6.svg'
import './main_block.scss'
import React, {Component} from "react";


export default class Main_block extends Component {
    render() {
        return (
            <div >
                <div className='main_info'>
                    <div className='title_info'>
                        <img src={alert}
                             className='star'
                             alt='notification'/>
                        <img src={star}
                             className='star'
                             alt='favourite'/>
                        <div>
                            <p className='title_text_main_info'>AAPL</p>
                            <p className='title_small_text_main_info'>Apple Inc</p>
                        </div>
                        <p className='percent_title'>$148.9</p>
                        <p className='percent_blue_title'>+0,39% </p>
                    </div>
                    <div className='main_charity'>
                        <div className='nav_part'>
                            <img className='icon_title' src={settings} alt='fix'/>
                            <img className='icon_title' src={char} alt='fix'/>
                            <img className='icon_title' src={minus} alt='fix'/>
                            <img className='icon_title' src={plus} alt='fix'/>
                        </div>
                        <img className='chart' src={chart} alt={chart}/>

                        <div className='table'>
                            <div className='period'>
                                <p>1m</p>
                                <p>5m</p>
                                <p>15m</p>
                                <p>1h</p>
                                <p>4h</p>
                                <p>1d</p>
                                <p>1w</p>
                                <p>1m</p>
                            </div>
                            <div className='sell_buy'>
                                <div className='button sell'>
                                    <p>Sell</p><b>148,40</b>
                                </div>

                                <div className='button buy'>
                                    <p>Buy</p><b>149,40</b>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='sentiment'>
                        <div className='title_sentiment'>
                            <p className='text'>Tranding Sentiment</p>
                            <div className='check'>Check Trading Sentiment</div>
                        </div>
                        <div className='boxes'>
                            <div className='box trend'>
                                <div className='first_line_box'>
                                    <p className='caption'>Traders Trend</p>
                                    <img src={question}
                                         alt='question img'/>
                                </div>
                                <div className='percents'>
                                    <img className='red_img'
                                         src={bear}
                                         alt='red animal'/>
                                    <img className='blue_img'
                                         src={ox}
                                         alt='blue animal'/>
                                </div>
                                <div className='notice'>
                                    <p className='red_text'>Bearish 2.6%</p>
                                    <p className='blue_text'>Bullish 97.4%</p>
                                </div>
                            </div>
                            <div className='box opinions'>
                                <div className='first_line_box'>
                                    <p className='caption'>Bloggers Opinions</p>
                                    <img src={question}
                                         alt='question img'/></div>
                                <div className='main_part'>
                                    <div className='part'>
                                        <img className='blue_pic'
                                             src={ox}
                                             alt='blue picture'/>
                                        <p className='grey_text'>APPLE SENTIMENT </p>
                                        <p className='percent'>89%</p>
                                    </div>
                                    <div className='part'>
                                        <img className='blue_pic'
                                             src={ox}
                                             alt='blue picture'/>
                                        <p className='grey_text'>SECTOR SENTIMENT </p>
                                        <p className='percent'>71%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box activity'>
                                <div className='first_line_box'>
                                    <p className='caption'>Traders Trend</p>
                                    <img src={question}
                                         alt='question img'/>
                                </div>
                                <div className='central_part'>

                                    <div className='decreased'>
                                        <b>Trend</b>

                                        <p className='red_text_dec'>Deacreated</p>

                                    </div>
                                    <p className='footer'>By 952M shares in the last quarter</p>
                                </div>
                            </div>
                            <div className='box activity'>
                                <div className='first_line_box'>
                                    <p className='caption'>Traders Trend</p>
                                    <img src={question}
                                         alt='question img'/>
                                </div>
                                <div className='central_part'>

                                    <div className='decreased'><b>Trend</b>
                                        <p className='red_text_dec'>Sold</p>

                                    </div>
                                    <p className='footer'>Worth 1,350,750 in the last 3 months</p>
                                </div>
                            </div>
                            <div className='box trend'>
                                <div className='first_line_box'>
                                    <p className='caption'>News Sentiment</p>
                                    <img src={question}
                                         alt='question img'/>
                                </div>
                                <div className='percents other'>
                                    <img className='red_img'
                                         src={bear}
                                         alt='red animal'/>
                                    <img className='blue_img'
                                         src={ox}
                                         alt='blue animal'/>
                                </div>
                                <div className='notice'>
                                    <p className='red_text'>Bearish 13%</p>
                                    <p className='blue_text'>Bullish 87%</p>
                                </div>
                            </div>
                            <div className='box text_block'>
                                <div className='title_text'>
                                    <p>Avg. Price Target</p>
                                    <b>$175.28</b>

                                </div>
                                <div className='text_blocks'>Based on 25 ranked analysts offering 12 month price targets
                                    for
                                    Apple in the last 3 months, the average price target is $175.28, with a high
                                    estimate of
                                    $210 and a low estimate of $90
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='analysis'>
                        <p className='text'>Analysis and Statistics</p>
                        <div className='block_stat'>
                            <div className='left'>
                                <div className='line'>
                                    <p>Open</p>
                                    <p>179.31</p>
                                </div>
                                <div className='line'>
                                    <p>Prev.Close</p>
                                    <p>175.00</p>
                                </div>
                                <div className='line'>
                                    <p>1-Year Change</p>
                                    <p>+37.94%</p>
                                </div>
                                <div className='line'>
                                    <p>Day Range</p>
                                    <div>174.63 – 179.74
                                    </div>
                                </div>
                                <div className='line'>
                                    <p>52 Week Range</p>
                                    <div>116.50 – 182.88
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='line'>
                                    <p>Dividend Per Share</p>
                                    <p>0.85</p>
                                </div>
                                <div className='line'>
                                    <p>Market Cap</p>
                                    <p>2948.23B</p>
                                </div>
                                <div className='line'>
                                    <p>EPS</p>
                                    <p>5.60714</p>
                                </div>
                                <div className='line'>
                                    <p>Beta</p>
                                    <p>1.20364</p>
                                </div>
                                <div className='line'>
                                    <p>Volume</p>
                                    <div className='last_line'>
                                        <div>
                                            <p className='grey_text_line '>10 Days Avg.</p>
                                            <p className='grey_text_line '>3 Month AVG.</p>
                                        </div>
                                        <div>
                                            <p className='balack_text'>79.5938</p>
                                            <p className='balack_text'>1877.31</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='asset_info'>
                        <p className='text'>Asset Info</p>
                        <div className='text_info'>
                            Apple (ticker symbol: AAPL) is one of the world's leading consumer electronics and personal
                            computer companies. The Cupertino, California-based company was established in 1977 as Apple
                            Computer Inc. It dropped the "Computer" from its name in early 2007. Apple's current place
                            in
                            the global marketplace is a far cry from its humble beginnings, with Steve Jobs, Steve
                            Wozniak
                            and Ronald Wayne selling hand-made personal computer kits in the late '70s. The company
                            continued to focus on personal computers for the
                        </div>
                        {/*<div className='see_more'>*/}
                        {/*    <p>See more</p>*/}
                        {/*    <img src=''*/}
                        {/*         alt='see more'/>*/}

                        {/*</div>*/}
                    </div>
                    <div className='news'>
                        <p className='text'>News</p>
                        <div className='news_blocks'>
                            <div className='box_news'>
                                <div><span className='main_news_text'>Apple Car Goes Full-Throttle Under Kevin Lynch With An...</span>
                                    <p className='post_date'>14 minutes ago</p></div>
                                <img src={first}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                            <div className='box_news'>
                                <div><span
                                    className='main_news_text'>Revolut banking app lets teens in UK and Europe use Apple Pay</span>
                                    <p className='post_date'>12.11.2021, 17:43</p></div>
                                <img src={second}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                            <div className='box_news'>
                                <div><span
                                    className='main_news_text'>The reimagined Apple The Grove now open in Los Angeles</span>
                                    <p className='post_date'>12.11.2021, 17:15</p></div>
                                <img src={third}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                            <div className='box_news'>
                                <div><span
                                    className='main_news_text'>US technology giant Apple (AAPL) shrugged off the issues </span>
                                    <p className='post_date'>12.11.2021, 17:43</p></div>
                                <img src={fourth}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                            <div className='box_news'>
                                <div><span
                                    className='main_news_text'>Apple are expanding employee benefits to cover abortion care</span>
                                    <p className='post_date'>11.11.2021, 22:12</p></div>
                                <img src={fives}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                            <div className='box_news'>
                                <div><span
                                    className='main_news_text'>Here are Wednesday’s biggest analyst calls: Apple & more</span>
                                    <p className='post_date'>09.11.2021, 10:01</p></div>
                                <img src={sixth}
                                     className='pic_news'
                                     alt='picture news'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}