import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import App from './App';
import * as serviceWorker from './serviceWorker';
function Tweet({ tweet }) {
    return (
        <div className="tweet">
        <div className="content">
                <Author author={tweet.author}/>
        </div>
    </div>
);
}
function Author({ author }) {
const { name, handle, address } = author;
return (
    <span className="author">
    <span className="name">{name}</span><br></br>
    <span className="handle">{handle}</span><br></br>
    <span className="address">{address}</span>
    </span>
);
}
const testTweet = {

author: {
handle: "123 Fake Street",
name: "John Summers",
address: "Boston, MA 02118"
}
};   

ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector('#root'));