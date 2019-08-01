import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/users';
import Users from '../components/users.jsx';

function mapStateToProps(state, router) {
    const { items, requesting } = state.users;
    const appId = router.match.params.id;
    const page = parseInt(router.match.params.page, 10);

    return { requesting, items, appId, page };
}

function mapDispatchToProps(dispatch, router) {
    const { id, page } = router.match.params;
    return {
        fetchUsers: () => dispatch(fetchUsers(id, parseInt(page, 10)))
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Users)
);
