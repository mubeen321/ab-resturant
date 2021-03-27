import React, { PureComponent } from 'react';
import MainPage from '../component/MainPage';

class MainPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openSideBar: true
        }
    }

    toggleSideBar = (e) => {
        this.setState({
            openSideBar: !this.state.openSideBar
        });
    }

    render() {
        if(window.innerWidth < 800) {
        return (<MainPage openSideBar={!this.state.openSideBar} toggleHandler={this.toggleSideBar} />);
    }
    else{
        return (<MainPage openSideBar={this.state.openSideBar} toggleHandler={this.toggleSideBar} />);

    }
}
}

export default MainPageContainer;