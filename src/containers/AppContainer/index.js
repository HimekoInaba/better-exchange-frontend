import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Topnav from '../../components/Topnav';
import {Home} from "../../components/Home";
import { connect } from 'react-redux'
import {signUserActionCreator} from "../../store/actions/user";

export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onButtonPress = () => {
        this.props.signUser({
            email: 'sdasd',
            nickname: 'sdagwger',
        });
    };

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
                    <button onClick={this.onButtonPress}>SDsd</button>
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

function mapDispatchToProps(dispatch) {
    return {
        signUser: payload => dispatch(signUserActionCreator(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
