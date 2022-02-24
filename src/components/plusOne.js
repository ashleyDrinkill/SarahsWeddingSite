import { Component } from "react/cjs/react.production.min";

class PlusOne extends Component {
    render() {
        return(
            <div className="row p-3">
                <div className="col-4">
                    Will you be bringing a plus one? 
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-between align-items-center">
                            Yes <input type="radio" name="attending" value="yes"></input>
                            No <input type="radio" name="attending" value="no"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            If yes, what's their full name? <input type="text" value={this.state.plusOneName} name="plusOneName" size="15"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlusOne;