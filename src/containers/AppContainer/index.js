import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Topnav from '../../components/Topnav';
import {Home} from "../../components/Home";
import { connect } from 'react-redux'

export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {

    }

    render() {
        const { user } = this.props;

        console.log(user);

        return (
            <div className="app_wrap">
                <div className="app">
                    <div className="app_top_nav">
                        <Topnav/>
                    </div>
                    <main>
                        Router goes here:
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(AppContainer);
