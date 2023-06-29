

let undefiendstore = {
    navigations: [
        {
            id: 1,
            link: "Profile",
            to: "/profile"
        },

        {
            id: 2,
            link: "Messages",
            to: "/Messages"
        },

        {
            id: 3,
            link: "New",
            to: "/New"
        },

        {
            id: 4,
            link: "Music",
            to: "/Music"
        },

        {
            id: 5,
            link: "Settings",
            to: "/Settings"
        },

        {
            id: 6,
            link: "Users",
            to: "/Users"
        }
    ]
}

const SitebarReducer = (state = undefiendstore, action) => {

    return state;
}

export default SitebarReducer;