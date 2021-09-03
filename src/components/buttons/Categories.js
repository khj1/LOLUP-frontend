import React from 'react';
import { useDispatch } from 'react-redux';
import { initDuoData, setPosition } from '../../_actions/userAction';
import styled, { css } from 'styled-components';

const categories = [
    {   
        name: 'ALL',
        text: '전체라인', 
        menu_img : 'ALL.png' 
    },
    {
        name: 'TOP',
        text: '탑', 
        menu_img : 'TOP.png' 
    },
    {
        name: 'JUG',
        text: '정글', 
        menu_img : 'JUG.png' 
    },
    {
        name: 'MID',
        text: '미드',
        menu_img : 'MID.png' 
    },
    {
        name: 'BOT',
        text: '원딜', 
        menu_img : 'BOT.png' 
    },
    {
        name: 'SUP',
        text: '서포트', 
        menu_img : 'SUP.png' 
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding-top: 120px;
    padding-bottom: 1.5vh;
    width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 1300px){
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
    padding: 0.25rem;

    &: hover {
        border-bottom: 2px solid #22b8cf;
    }

    ${props =>
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
    `}
`;

const Categories = (props) => {
    const dispatch = useDispatch();
    
    const onSelect = (position) => {
        dispatch(initDuoData());
        dispatch(setPosition(position));
    }
    
    return (
        <CategoriesBlock>
            {categories.map(category => (
                <Category key={category.name} active={props.position === category.name} onClick={() => onSelect(category.name)}>
                    <img src={"/images/position/"+ category.menu_img} width="30px"></img>
                </Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;
