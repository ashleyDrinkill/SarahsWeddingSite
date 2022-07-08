import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';

class Schedule extends Component {
    render() {
        return(
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className='col position-absolute'>
                        <SideFlower />
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="nav navbar"><TopNav /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center p-3">
                        <div><h1 style={{ fontSize: '275%', textTransform: 'uppercase'}}>Schedule</h1></div>
                    </div>
                </div>
                <hr style={{width:'75%',marginLeft:'auto',marginRight:'auto'}}></hr>
                {/* <div className="row ms-5 me-5">
                    <div className="col"></div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>2:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Ceremony
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>3:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Cocktails/Games
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>5:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Reception
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>5:30</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Dinner
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>8:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Dance
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>10:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Campfire Snack
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-0">
                            <div className="col d-flex justify-content-center">
                                <h3 style={{fontFamily: "waterfall", fontWeight: 600}} className='m-0'>12:00</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col d-flex justify-content-center">
                                Farewell
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center">
                        Please bring cash for our toonie bar as debit or credit will not be accepted.
                    </div>
                </div> */}
                
                
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className='m-0'>Ceremony</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center align-items-end">
                        <div className="m-0">2:00PM</div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Cocktails and Games</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <div className="m-0">3:00PM</div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Reception</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                    <div className="m-0">5:00PM</div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Dinner</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                    <div className="m-0">5:30PM</div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Dance</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                    <div className="m-0">8:00PM</div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Campfire Snack</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        10:00PM
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col d-flex justify-content-center">
                        <h1 style={{fontFamily: "waterfall", fontWeight: 500}} className="m-0">Farewell</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        12:00AM
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        Please bring cash for our toonie bar as debit or credit will not be accepted.
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;