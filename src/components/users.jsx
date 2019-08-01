import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page) {
            this.props.fetchUsers();
        }
    }
    render() {
        const { requesting, items, appId, page } = this.props;
        const noItems = !items || !items.length;
        return (
            <div id="users">
                <Pagination appId={appId} page={page} isEnd={noItems} />
                {requesting ? (
                    <div>Loading...</div>
                ) : noItems ? (
                    <div>No more users</div>
                ) : (
                    <ul>
                        {items.map(item => (
                            <User {...item} />
                        ))}
                    </ul>
                )}
                <Pagination appId={appId} page={page} isEnd={noItems} />
            </div>
        );
    }
}

function Pagination({ appId, page, isEnd }) {
    return (
        <ul class="nav">
            {page > 1 && (
                <li>
                    <Link to={`/apps/${appId}/${page - 1}`}>Previous</Link>
                </li>
            )}
            {!isEnd && (
                <li>
                    <Link to={`/apps/${appId}/${page + 1}`}>Next</Link>
                </li>
            )}
        </ul>
    );
}

function User({ id, name, email, avatar }) {
    return (
        <li>
            <p>Name: {name}</p>
            <p>
                Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
            <img src={avatar} alt={name} width="50" height="50" />
        </li>
    );
}
