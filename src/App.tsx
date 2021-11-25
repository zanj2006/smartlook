import React, {useEffect, useReducer} from 'react';
import {initialState, reducer} from './reducer';
import {Posts, PostDetail, User} from './components';
import {GlobalStyle, Columns, ColumnThird, Column, Heading} from './styles';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const load = async () => {
            const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
            const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
            const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());

            dispatch({type: 'setMulti', value: {
                posts,
                users,
                comments,
                maxPages: Math.ceil(posts.length / state.perPage),
            }})

            dispatch({type: 'setPage', value: 1})
        }

        load()
    }, [])

    if (!state.users.length || !state.posts.length || !state.comments.length || !state.activePost) {
        return <div>Loading...</div>
    }

    return <>
        <GlobalStyle />
        <Columns>
            <ColumnThird>
                <Heading>Posts</Heading>
                <Posts
                    dispatch={dispatch}
                    curPosts={state.curPosts ?? []}
                    page={state.page ?? 0}
                    perPage={state.perPage}
                    maxPages={state.maxPages ?? 0}
                    around={state.around}
                    toggledIndex={state.toggledIndex ?? 0}
                />
            </ColumnThird>
            <Column>
                <Heading>{state.showUserDetail ? 'User' : 'Post'}</Heading>
                {state.showUserDetail ? <User
                    activePost={state.activePost}
                /> : <PostDetail
                    activePost={state.activePost}
                    dispatch={dispatch}
                />}
            </Column>
        </Columns>
    </>
}