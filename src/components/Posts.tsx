import React from 'react';
import {Post, PaginationBar} from '.';
import {PostType} from '../types';

type Props = {
    curPosts: Array<PostType>,
    dispatch: Function,
    page: number,
    perPage: number,
    maxPages: number,
    around: number,
    toggledIndex: number,
}

const onClick = (dispatch: Function, type: string) => (value: number) => (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    dispatch({type, value})
}

export const Posts = (props: Props) => {
    if (!props.curPosts?.length) {
        return <div className="card-content py-2">There is nothing to display</div>
    }

    const onClickTitle = onClick(props.dispatch, 'setActivePost')
    const onClickPage = onClick(props.dispatch, 'setPage')

    return <>{props.curPosts.map((post, index) => {
        const globalIndex = (props.perPage * (props.page - 1)) + index;
        return <Post
            key={post.id}
            title={post.title}
            active={props.toggledIndex === globalIndex}
            onClick={onClickTitle(globalIndex)}
    />})}
    <PaginationBar
        onClick={onClickPage}
        page={props.page}
        perPage={props.perPage}
        maxPages={props.maxPages}
        around={props.around}
    /></>
}
