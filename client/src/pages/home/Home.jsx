import { useEffect, useState } from "react"
import { Navbar, Featured } from "../../components"
import List from "../../components/list/List"
import Login from "../login/Login"
import Register from "../register/Register"
import axios from "axios";
import "./Home.scss"

function Home({ type }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const url = `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`;
                const { data } = await axios.get(
                    url,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                )
                setLists(data);
            } catch (error) {
                console.log(error)
            }
            console.log('lists', lists)
        }

        getRandomList();
    }, [genre, type]);
    console.log(lists)
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list, i) => (
                <List list={list} key={i} />
            ))}
        </div>
    )
}

export default Home
