import React from 'react';
import s from './styles/Pagination.module.css';

function Pagination({dogsPerPage, breeds, paginado}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(breeds/dogsPerPage); i++ ) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={s.paginado}>
                { pageNumbers && pageNumbers.map(number => (
                    <li className={s.number} key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination

