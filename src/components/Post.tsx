import React from 'react';
import {Title} from '../styles';

type Props = {
    title: string,
    active: boolean,
    onClick: React.MouseEventHandler,
}

export const Post = (props: Props) => <Title active={props.active} onClick={props.onClick}>
    <p><span>{props.title}</span></p>
</Title>