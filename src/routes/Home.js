import React, { useState, useCallback } from 'react';
import Categories from '../components/Categories';
import DuoList from '../components/DuoList';

/* React Router 적용 X >> useState로 관리 */

const Home = () => {
    const [ category, setCategory ] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <>
            <Categories category={category} onSelect={onSelect} />
            <DuoList category={category} />
        </>
    );
};

export default Home;
