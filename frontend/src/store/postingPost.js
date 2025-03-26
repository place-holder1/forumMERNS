// I will have this here for now. This doesn't work.

export const forumPost {
    post: [],
    setPost: (post),
    createPost: async (newPost) => {

    const res = await fetch ("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "applicaiton/json",
        },
        body: JSON.stringify(newPost),
    });
    },
};