import { connect } from 'react-redux';
import ProtectedRoute from '../components/protected-route.jsx';

function mapStateToProps(state) {
    const { success, requesting, error } = state.signIn;

    return { success, requesting, error };
}

export default connect(mapStateToProps)(ProtectedRoute);
