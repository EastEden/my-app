import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Yestarday" text="Nice"/>
            <CommentDetail author="Alex" timeAgo="Jan.1st" text="OK"/>
            <CommentDetail author="Bob" timeAgo="Today" text="Fantastic"/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);