import React from 'react';
import ReactDOM from 'react-dom';

import Index from '../components/index';
import Head from '../components/head';
import Footer from '.././components/footer';

class IndexClass extends React.Component {
    componentWillMount()
    {
    }
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            footerPosition: '',
            servicesPosition: '',
            whoWeArePosition: ''
        };
    }

    //callbacks events
    handleChangeFooterPosition(event){
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
                <Footer />
                </div>
            );
    }
}


ReactDOM.render(<IndexClass/>, document.getElementById('container'));
