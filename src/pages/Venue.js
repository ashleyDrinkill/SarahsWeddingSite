import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';
import venuepic from '../style/venuepic.jpg';

class Venue extends Component {
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
                        <div><h1 style={{ fontSize: '275%', textTransform: 'uppercase'}}>Venue</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-center">
                            <img className="rounded w-75 h-75 VenuePicture" src={venuepic} alt="Venue Lights"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div><h4>White Tail Woods Wedding and Event Centre</h4></div>
                            <div className="ps-4"><b>Address:</b> B 48235 Range Rd 10 Rural, AB T0C 2P0</div>
                            <div className="ps-4"><b>Google Maps Link:</b> <a href="https://www.google.com/maps/place/White+Tail+Woods+-+Weddings+%26+Events/@53.1467543,-114.0000254,17z/data=!3m1!4b1!4m5!3m4!1s0x539fddc002173385:0xce5c59690f0a38e!8m2!3d53.1467543!4d-113.9978314">Google Maps</a></div>
                            <div className="ps-4">
                                <b>Directions from Edmonton (Highway 2): </b>
                                <ul style={{listStyleType: 'square'}}>
                                    <li>Take the Queen Elizabeth II Highway south out of Edmonton</li>
                                    <li>Take Exit 508 toward Glen Park District W (headed west)</li>
                                    <li>Continue west on Township Road 490</li>
                                    <li>Turn left on Range Road 10 (headed south)</li>
                                    <li>After 5.7 KM, turn left at the White Tail Woods sign</li>
                                    <li>Continue until you see the next White Tail Woods sign and turn right</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Venue;