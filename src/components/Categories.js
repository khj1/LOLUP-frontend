import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기' /* 이 항목 뺄지말지 결정 */
    },
    {
        name: 'jungle',
        text: '정글'
    },
    {
        name: 'top',
        text: '탑'
    },
    {
        name: 'mid',
        text: '미드'
    },
    {
        name: 'longD',
        text: '원딜(원거리딜러)'
    },
    {
        name: 'support',
        text: '서포트'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 15vh;
    width: 40%;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%,
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &: hover {
        color: #495057;
    }

    ${props =>
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &: hover {
            color: #3bc9db;
        }
    `}

    & + & {
        margin-left: 1rem;
    }
`;


const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;
