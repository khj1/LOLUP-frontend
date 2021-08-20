import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DuoItem from './DuoItem';


const DuoListBlock = styled.div`
    box-sizing: border-box;
    padding-botton: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const DuoList = () => {
    const [most3, setMost3] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get(
                    'http://lolup-api.p-e.kr/duo?position=ALL&tier=ALL'
                );
                setMost3(response.data.most3);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <DuoListBlock>Loading...</DuoListBlock>
    }
    if(!most3){
        return null;
    }

    return (
        <DuoListBlock>
            {most3.map(most3 => (
                <DuoItem key={most3.Garen} most3={most3} />
            ))}
        </DuoListBlock>
    );
};

export default DuoList;
