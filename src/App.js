import React from 'react';
import MyForm from "./components/Form/form";

class App extends React.Component {
    componentDidMount() {
        this.request();
    }

    request = async () => {
        const res = await fetch('http://192.168.0.103:3000/')
        const text = await res.text();
        console.log(text);
    }

    render() {
        return (
            <div>
                <MyForm/>
            </div>
        )
    }
}

export default App;