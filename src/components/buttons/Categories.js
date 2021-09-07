import React from 'react';
import { useDispatch } from 'react-redux';
import { initDuoData, setPosition, setTier } from '../../_actions/userAction';
import styled, { css } from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

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



const Categories = (props) => {
    const dispatch = useDispatch();
    
    const onSelect = (position) => {
        dispatch(initDuoData());
        dispatch(setPosition(position));
    }

    const handleChange = (value) => {
        dispatch(setTier(value))
    }
    
    return (
        <CategoriesBlock>
            <Select style={tierStyle} onChange={handleChange} defaultValue="ALL">
                <Option value="ALL">전체티어</Option>
                <Option value="IRON">아이언</Option>
                <Option value="BRONZE">브론즈</Option>
                <Option value="SILVER">실버</Option>
                <Option value="GOLD">골드</Option>
                <Option value="PLATINUM">플래티넘</Option>
                <Option value="DIAMOND">다이아몬드</Option>
                <Option value="MASTER">마스터</Option>
                <Option value="GRANDMASTER">그랜드마스터</Option>
                <Option value="CHALLENGER">챌린저</Option>
            </Select>
            {categories.map(category => (
                <Category key={category.name} active={props.position === category.name} onClick={() => onSelect(category.name)}>
                    <img src={"/images/position/"+ category.menu_img} width="30px"></img>
                </Category>
            ))}
        </CategoriesBlock>
    );
}

const tierStyle = {
    width: "120px",
    marginRight: "12px",
    top: "6px"
}

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

export default Categories;
