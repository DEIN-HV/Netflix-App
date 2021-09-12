import { useEffect, useState } from "react"
import { Navbar, Featured } from "../../components"
import List from "../../components/list/List"
import Login from "../login/Login"
import Register from "../register/Register"
import axios from "axios";
import "./Home.scss"

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () =>{
            try {
                
                const url=`lists${type?"?type=" + type:""}${genre?"&genre=" + genre:""}`;
                const {data} = await axios.get(
                    url,
                    {
                        headers:{
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzRjNjkwNTRjMGM5YTQ2YmNjN2JiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTQyNDUzOCwiZXhwIjoxNjMxODU2NTM4fQ.bORsjVp40mBnY4ICpnoEA22CGsEtPagt4ZcFGfv7zcc"
                        }
                    }
                )
                setLists(data);
            } catch (error) {
                console.log(error)
            }
            console.log('lists',lists)
        }

        getRandomList();
    }, [genre, type]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list,i)=>(
                <List list={list} key={i}/>
            ))}
        </div>
    )
}

export default Home
