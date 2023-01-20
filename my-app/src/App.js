import './App.css'
import React from 'react'
import Header from './Components/Header_1'
import Main_block from "./Components/main_block";
import './index.css'
import Schedules from "./Components/schedules";
import WatchList from "./Components/WatchList";

// import './Components/img'


function App() {
    return (
        <div>
            <Header/>
            <div className='block'>
                <WatchList/>
                <Schedules/>
                <Main_block/>
            </div>
        </div>
    );
}

export default App;




