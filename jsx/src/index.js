// Import the librarys

import React from "react";
import ReactDOM from "react-dom";

function getButtonText(){
    return "Click ME!!!!!!"
}

// Create a react component
const App = () => {
    
    const style = { backgroundColor: 'blue', color: 'white'};
    const buttonText = { text : 'CSB' };

    return(
    <div>
        <label className="label" for="name">
            Enter name:
        </label>
        <input id="name" type="text" />
        <button style={style}>
            {buttonText.text}
        </button>
    </div>
    );
};

// Take the component and show
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

if (module.hot) {
    module.hot.accept();
}
