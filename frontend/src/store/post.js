import {create} from 'zustand';

export const usePostStore = create((set) => ({
    posts: [],
    setPosts: (posts) => set({posts}),
    removePost: (postId) => set((state) => ({posts: state.posts.filter((post) => post._id !== postId)})),
    updatePost: (updatedPost) => set((state) => ({
        posts: state.posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)),
    })),
    createPost: async (newPost) => {
        if (!newPost.title || !newPost.content || !newPost.character || !newPost.tags) {
            return {success: false, message: 'All fields are required'};
        }

        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });
        const data = await res.json();
        set((state) => ({posts: [...state.posts, data]}));
        return {success: true, message: 'Post created successfully'};
    },
    clearPosts: () => set({posts: []}),
    fetchPosts: async () => {
        try {
            const response = await fetch('/api/posts');
            const data = await response.json();
            set({posts: data});
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    },
    fetchPostById: async (postId) => {
        try {
            const response = await fetch(`/api/posts/${postId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    },
    fetchPostsByUserId: async (userId) => {
        try {
            const response = await fetch(`/api/posts/user/${userId}`);
            const data = await response.json();
            set({posts: data});
        } catch (error) {
            console.error('Error fetching posts by user:', error);
        }
    },
    fetchPostsByTag: async (tag) => {
        try {
            const response = await fetch(`/api/posts/tag/${tag}`);
            const data = await response.json();
            set({posts: data});
        } catch (error) {
            console.error('Error fetching posts by tag:', error);
        }
    },
    fetchPostsBySearch: async (searchQuery) => {
        try {
            const response = await fetch(`/api/posts/search?query=${searchQuery}`);
            const data = await response.json();
            set({posts: data});
        } catch (error) {
            console.error('Error fetching posts by search:', error);
        }
    }
}));