import { useState } from'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);
    const onSavedPostClicked = () => {
        if(title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const userOptions = users.map((user) => {
        return <option key={user.id} value={user.id}>{user.name}</option>
    });

    return (
        <section className="add-post-form">
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
                <label htmlFor='postAuthor'>Author:</label>
                <select id='postAuthor' name='postAuthor' value={userId} onChange={onAuthorChanged}>
                    {userOptions}
                </select>
                <label htmlFor='postContent'>Post Content:</label>
                <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged}></textarea>
                <button type='button' onClick={onSavedPostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;