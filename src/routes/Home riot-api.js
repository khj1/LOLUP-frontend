import axios from 'axios';
import React, {useState} from 'react';

/* api 기준 : 08/19 */

const Home = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios.get('http://lolup-api.p-e.kr/duo?position=ALL&tier=ALL').then(response => {
            setData(response.data);
        });
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null,2)} readOnly={true} />}
        </div>
    );
}

export default Home;
