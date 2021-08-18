import React, {useState} from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null);
    const onClick = async() => {
        try{
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=80d55f7d3e0a4ff6891782fa430c5173'
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
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
