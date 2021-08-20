import React from 'react';
import styled from 'styled-components';

const DuoItemBlock = styled.div`
    display: flex;
    
.thumbnail {
    margin-right: 1rem;
    img{
        display: block;
        width: 160px;
        height: 100px;
        object-fit: cover;
    }
}
.contents {
    h2 {
        margin: 0;
        a{
            color: black;
        }
    }
    p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }
}

& + & {
    margin-top: 3rem;
}
`;

const DuoItem = ({ most3 }) => {
    const { Garen, Malphite, Jinx } = most3;
    return (
        <DuoItemBlock>
            {Garen && (
                <div className="thumbnail">
                    <a href={Jinx} target="_blank" rel="noopener noreferrer">
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={Jinx} target="_blank" rel="noopener noreferrer">
                        {Garen}
                    </a>
                </h2>
                <p>{Malphite}</p>
            </div> 
        </DuoItemBlock>
    );
}

export default DuoItem;