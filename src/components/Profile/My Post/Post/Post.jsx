import React from 'react';
import s from './Post.module.css';

 function Post(props) {

    return (               
            <div className={s.item}>
                <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg' />
                {props.message}
                <span>{props.count}</span>
            </div>
    );
}

export default Post;