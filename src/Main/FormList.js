import React from 'react';
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(PostList);