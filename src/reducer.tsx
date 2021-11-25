import {StateType, ActionType, UserType, CommentType, PostType} from './types';

export const initialState: StateType = {
    users: [],
    posts: [],
    comments: [],
    perPage: 10,
    around: 1,
    showUserDetail: false,
}

const makeActivePost = (users: Array<UserType>, posts: Array<PostType>, comments: Array<CommentType>, toggledIndex: number): PostType => {
    const post = posts[toggledIndex];
    return {
        ...post,
        user: users[post.userId - 1],
        comments: comments.filter(row => row.postId === post.id)
    }
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'set': {
            if (action.attr) {
                return {
                    ...state,
                    [action.attr]: action.value,
                }
            }

            throw new Error('Undefined attribute');
        }

        case 'setMulti':
            return {
                ...state,
                ...action.value,
            }

        case 'setPage': {
            const toggledIndex = state.perPage * (action.value - 1);
            const curPosts = state.posts.slice((action.value - 1) * state.perPage, action.value * state.perPage);
            return {
                ...state,
                page: action.value,
                toggledIndex,
                showUserDetail: false,
                curPosts,
                activePost: makeActivePost(state.users, state.posts, state.comments, toggledIndex)
            }
        }

        case 'setActivePost':
            return {
                ...state,
                toggledIndex: action.value,
                showUserDetail: false,
                activePost: makeActivePost(state.users, state.posts, state.comments, action.value)
            }

        default:
            throw new Error('Undefined dispatch type');
    }
}
