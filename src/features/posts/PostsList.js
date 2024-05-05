import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./postAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p className="postCredit"><PostAuthor userId={post.userId} /></p>
            </article>
        );
    });
    return (
        <section>
            <h2>Posts</h2>
            { renderPosts }
        </section>
    );
}

export default PostsList;