import React, { useState, useCallback } from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';

/* React Router 적용 X >> useState로 관리 */

const Home = () => {
    const [ category, setCategory ] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </>
    );
};

export default Home;
