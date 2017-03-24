import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js'

function Wrap(props) {
    return (
        <Login></Login>
    );
}

ReactDOM.render(
    <Login/>,
    document.getElementById('wrap')
);
