import React from 'react';
import {PostType} from '../types';
import {Detail} from '../styles';

type Props = {
    activePost: PostType,
    dispatch: Function,
}

const onClick = (dispatch: Function) => (value: boolean) => (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    dispatch({type: 'set', attr: 'showUserDetail', value})
}

export const PostDetail = (props: Props) => <Detail>
    <h2>{props.activePost.title}</h2>
    <h3>Author: <span onClick={onClick(props.dispatch)(true)}>{props.activePost.user?.name}</span></h3>
    <p>{props.activePost.body}</p>

    {props.activePost.comments?.length && <>
    <h4>Comments</h4>
    <ul>
        {props.activePost.comments?.map(row => <li key={row.id}><a href={`mailto:${row.email}`}>{row.name}</a> - {row.body}</li>)}
    </ul></>}
</Detail>