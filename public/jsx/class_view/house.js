import React from 'react';
import ReactDOM from 'react-dom';

import House from '../components/house';
import Head from '../components/head';
import Footer from '.././components/footer';

class HouseClass extends React.Component {
    componentWillMount()
    {
    }
    constructor(props) {
        super(props);
        this.state = {userId: ""};
    }

    //callbacks events
    handleChangeUserId(event){
        //this.setState({userId: event.target.value});
    }
    handleChangePassword(event){
        //this.setState({Password: event.target.value});
    }
    
    render() {
        return (
                <div>
                <Head />
                <House />
                <Footer />
                </div>
            );
    }
}


ReactDOM.render(<HouseClass/>, document.getElementById('container'));
