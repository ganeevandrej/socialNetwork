const UPP_DATE_MESSAGE = 'UPP-DATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let undefiendstore = {

    dialogData: [
        {
            id: 1,
            message: "hi",
            url: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
        },
        {
            id: 2,
            message: "how are you?",
            url: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
        },
        {
            id: 3,
            message: "great",
            url: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg"
        }
    ],

    contactData: [
        { id: 1, name: "Sanay", url: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg"},
        { id: 2, name: "Andy", url: "https://android-obzor.com/wp-content/uploads/2022/02/20-2.jpg" },
        { id: 3, name: "Sara", url: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg" },
        { id: 4, name: "Vitaly", url: "https://android-obzor.com/wp-content/uploads/2022/02/90-2-300x300.jpg" },
        { id: 5, name: "Dima", url: "https://www.meme-arsenal.com/memes/982da289bae6d7738358d8fec285acc8.jpg" }
    ]
}


const MessageReducer = (state = undefiendstore, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {

                id: 4,
                message: action.text,
                url: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg"
            }

            return {
                ...state,
                dialogData: [...state.dialogData, newMessage]
            }
        default:
            return state;
    }
}

export const addMessage = (text) => {
    return {type: ADD_MESSAGE, text}
}

export const addMessageTanck = (text) => {
    return (dispatch) => {
        dispatch(addMessage(text));
    }
}

export default MessageReducer;