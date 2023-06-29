import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../../../component/pleloader/validateComponent/ComponentField';
import { maxlenght, required } from '../../../component/pleloader/validateComponent/validate';

const maxlenght10 = maxlenght(10);

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Создай пост' name='postMessage' component={Textarea}
                validate={[required, maxlenght10]} />
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    );
}

const PostForm = reduxForm({form: 'newPost'})(addPostForm);

function MyPost(props) {
    
    let postsElements = props.profilePage.postData.map(post => <Post message={post.message} count={post.count} />);

    let onSubmit = (formData) => {
        console.log(formData.postMessage);
        props.addPostTanck(formData.postMessage);
    }

    return (

        <div className={s.wrapper}>
            <h3>My post</h3>
            <div>
                <PostForm onSubmit={onSubmit} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;