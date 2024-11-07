import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [data, setData] = useState('')

    useEffect(() => {
        axios.get('/react/api')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {data}
        </div>
    );
}

export default App;