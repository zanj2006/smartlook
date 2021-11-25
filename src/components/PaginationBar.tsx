import React from 'react';
import {Nav, PaginationList, Button, Dots} from '../styles';

type Props = {
    onClick: Function,
    page: number,
    maxPages: number,
    perPage: number,
    around: number,
}

export const PaginationBar = (props: Props) => {
    const first = props.page <= 1 ? <Button disabled>1</Button> : <Button onClick={props.onClick(1)}>1</Button>;
    const last = props.page >= props.maxPages ? <Button disabled>{props.maxPages}</Button> : <Button onClick={props.onClick(props.maxPages)}>{props.maxPages}</Button>;
    const from = (props.page - props.around) < 1 ? 1 : props.page - props.around;
    const to = (props.page + props.around) > props.maxPages ? props.maxPages : props.page + props.around;
    const rows = [];
    for (let i = from; i <= to; i++) {
        if (i === props.page) {
            rows.push(<li key={i}><Button className="active">{i}</Button></li>);
        } else {
            rows.push(<li key={i}><Button onClick={props.onClick(i)}>{i}</Button></li>);
        }
    }
    return <Nav>
        <PaginationList>
            <li> {first} </li>
            <li> <Dots>&hellip;</Dots> </li>
            {rows}
            <li> <Dots>&hellip;</Dots> </li>
            <li> {last} </li>
        </PaginationList>
    </Nav>
}