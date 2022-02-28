import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';

class Registry extends Component {
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
                        <div><h1 style={{ fontSize: '275%', textTransform: 'uppercase'}}>Registry</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        Information regarding the registry will be released shortly.
                    </div>
                </div>
            </div>
        )
    }
}

export default Registry;