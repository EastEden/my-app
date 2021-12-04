import React from "react";
import ReactDOM from "react-dom";
import SeasonDisPlay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

    state = { lat: null, errMsg: ''};

    renderContent(){
        if(this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>
        }
        else if(this.state.lat && !this.state.errMsg){
            return <SeasonDisPlay lat={this.state.lat} />
        }
        else{
            return <Spinner message="Please Accept Location Request..." />;
        }
    }

    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
            );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);