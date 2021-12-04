import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Yestarday" text="Nice"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Jan.1st" text="OK"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bob" timeAgo="Today" text="Fantastic"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);