import React from 'react';
import MyForm from "../Form/form";
import './App.css'

class App extends React.Component {

    request = async (data, cb) => {
        const res = await fetch('http://192.168.0.103:3000/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data
        });
        const response = await res.text();
      await  cb('serverResponse', response);
    }

    render() {
        return (
            <div className="form-container">
                <MyForm request={this.request}/>
            </div>
        )
    }
}

export default App;