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
                        <div><h1 style={{ fontSize: '300%' }}>Schedule</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        This is where you will find the schedule for the day of the wedding. You can expect it to be released in May.
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;