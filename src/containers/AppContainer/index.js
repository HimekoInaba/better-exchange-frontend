import React, { Component } from 'react';
import Topnav from '../../components/Topnav';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="app_wrap">
                <div className="app">
                    <div className="app_top_nav">
                        <Topnav/>
                    </div>
                </div>
            </div>
        );
    }
}
