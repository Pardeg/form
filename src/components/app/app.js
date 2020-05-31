import React from 'react';
import MyForm from "../form/form";
import './app.css'

class App extends React.Component {

    render() {
        return (
            <div className="form-container">
                <MyForm request={this.request}/>
            </div>
        )
    }
}

export default App;