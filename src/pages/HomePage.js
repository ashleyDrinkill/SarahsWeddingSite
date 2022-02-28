import React, { Component } from 'react';
import SideFlower from '../components/sideFlower.js';
import TopNav from '../components/TopNav.js';
import '../style/MainStyle.css';
import mainpagephoto from '../style/mainpagephoto.jpeg'

class HomePage extends Component{
    render() {
        return(
            <div className='container-fluid p-0 m-0 MainPage'>
                <div className='row'>
                    <div className='col position-absolute'>
                        <SideFlower />
                    </div>
                    <div className='col d-flex justify-content-center'>
                            <div className='d-flex flex-column align-items-center mt-5'>
                                <h1 style={{fontWeight: 400, fontSize: '350%', textTransform: 'uppercase'}}>Sarah and Brady</h1>
                                <h3 style={{fontFamily: "waterfall", fontWeight: 400}}>Please join us for our wedding celebration on</h3>
                                <h2 style={{fontWeight: 400}}>August 6, 2022</h2>
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex justify-content center'>
                        <TopNav />
                    </div>
                </div>
                <div className='row'>
                    <img src={mainpagephoto} alt='Sarah and Brady Couple'/>
                </div>
            </div>
        )
    }
}

export default HomePage;