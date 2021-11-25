import React from 'react';
import {Map} from 'react-mapycz'
import {PostType} from '../types';
import {Detail} from '../styles';

type Props = {
    activePost: PostType,
}

export const User = (props: Props) => {
    if (!props.activePost.user) {
        return <h2>Loading...</h2>;
    }
    const user = props.activePost.user;

    return <Detail>
        <h2>{user.name}</h2>
        <h3>Username: {user.username}</h3>
        <h3>Contact: </h3>
        <div>
            <p>Email: <a href={`mailto: ${user.email}`}>{user.email}</a></p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`mailto: ${user.email}`}>{user.website}</a></p>
        </div>
        <h3>Address: </h3>
        <div>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.zipcode} {user.address.city}</p>
            <Map
                width='300px'
                center={{lat: user.address.geo.lat, lng: user.address.geo.lng}}
            />
        </div>

        <h3>Company: </h3>
        <div>
            <p>{user.company.name}</p>
            <p>Catch phrase: {user.company.catchPhrase}</p>
            <p>Bs: {user.company.bs} {user.address.city}</p>
        </div>
    </Detail>
}