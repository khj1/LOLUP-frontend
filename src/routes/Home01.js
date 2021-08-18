import axios from 'axios';
import React, {useState} from 'react';

const Home = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
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
