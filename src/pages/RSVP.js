import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';
import PlusOne from '../components/plusOne.js';

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plusOneList : [],
            hasPlusOne : false
        };
    }

    render() {
        return(
            <div className="container-fluid">
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
                        <div><h1 style={{ fontSize: '300%' }}>RSVP</h1></div>
                    </div>
                </div>
                <form action='####' method="POST">
                    <div className="row p-3">
                        <div className="col-4">
                            Enter first and last name as seen on your invitation: 
                        </div>
                        <div className="col-6">
                            <input type='text' id='fullname' placeholder="Enter full name" size="40"></input>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-4">
                            Enter Mailing Address:
                        </div>
                        <div className="col-6">
                            <input type='text' id='address' placeholder="Enter full mailing address" size="40"></input>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-4">
                            Will you be attending the reception?
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="d-flex justify-content-between align-items-center">
                                    Yes <input type="radio" name="attending" value="yes"></input>
                                    No <input type="radio" name="attending" value="no"></input>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    {this.state.hasPlusOne ? <PlusOne /> : <div></div>}
                    <div className="row p-3">
                        <div className="col-4">
                            Do you have any dietary restrictions? Add them here
                        </div>
                        <div className="col-6">
                            <input type='text' id='dietary' placeholder="Add any dietary restrictions here"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default RSVP;