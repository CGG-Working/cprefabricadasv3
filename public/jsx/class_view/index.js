import React from 'react';
import ReactDOM from 'react-dom';

import Index from '../components/index';
import Head from '../components/head';

class IndexClass extends React.Component {
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
                <Index />
                </div>
            );
    }
}


ReactDOM.render(<IndexClass/>, document.getElementById('container'));
