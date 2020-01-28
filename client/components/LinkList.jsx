import * as React from 'react';
import { Link } from 'react-router-dom';

const linkList = [{ title: 'home', path: '/' }, { title: 'tour dates', path: '/tour' }, { title: 'gigography', path: '/gigography' }, { title: 'photos', path: '/photos' }, { title: 'lyrics', path: '/lyrics' }, { title: 'decoder ring', path: '/decoder' }];

const LinkList = () => {
    return (
        <ul>
            {linkList.map((item) => {
                return (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default LinkList;