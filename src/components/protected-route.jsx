import React from 'react';
import { Route, Redirect } from 'react-router';
import SignIn from '../containers/sign-in.jsx';

class ProtectedRoute extends React.Component {
    render() {
        const { error, requesting } = this.props;
        if (requesting) return <div>Loading...</div>;
        if (error) return <Redirect to={{ pathname: '/' }} />;
        return <Route {...this.props} />;
    }
}

export default ProtectedRoute;
