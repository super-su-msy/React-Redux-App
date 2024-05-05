import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Learning Redux Toolkit",
        content: "I've learning Redux Toolkit!"
    },
    {
        id: 2,
        title: "Slices...",
        content: "The more slices I've created!"
    }
];

const postSlice = createSlice({
    name: "posts",
        initialState,
        reducers: {
            postAdded: {
                reducer(state, action) {
                    state.push(action.payload);
                },
                prepare(title, content, userId) {
                    return {
                        payload: {
                            id: nanoid(),
                            title,
                            content,
                            userId
                        }
                    };
                }
            }   
        }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, postRemoved } = postSlice.actions;
export default postSlice.reducer;