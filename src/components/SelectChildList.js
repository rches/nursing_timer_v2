import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewTimer from "../pages/NewTimer.js";

class SelectChildList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChildName: "",
            selectedChildID: ""
        };
    }

    handleClick = payLoad => {
        this.setState({
            selectedChildName: payLoad.load.Name,
            selectedChildID: payLoad.id
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        {this.props.payLoad.map(payLoad => (
                            <li key={payLoad.id}>
                                <Link
                                    to={"/newtimer/" + payLoad.id}
                                    onClick={() => this.handleClick(payLoad)}
                                >
                                    {payLoad.load.Name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <Switch>
                        {this.props.payLoad.map(payLoad => (
                            <Route
                                exact
                                path={"/newtimer/" + payLoad.id}
                                key={payLoad.id}
                            >
                                <NewTimer
                                    childID={this.state.selectedChildID}
                                    childName={this.state.selectedChildName}
                                    userName={this.props.userName}
                                />
                            </Route>
                        ))}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default SelectChildList;
