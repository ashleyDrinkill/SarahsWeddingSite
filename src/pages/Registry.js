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
                        Please click the below link to access the registry:                    
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-5 d-flex justify-content-center">
                        <a href='https://www.myregistry.com/wedding-registry/sarah-christenson-and-brady-mccolman-st-albert-alberta-/3251941' target={"_blank"}>Sarah and Brady's Wedding Registy</a>
                  </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    The mailing address provided, 45 Dufferin Street St. Albert AB T8N 5R5, can be used to ship 
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    gifts to; however, you are more than welcome to ship them to your own address.
                    </div>
                </div>
            </div>
        )
    }
}

export default Registry;