import { Navbar, Featured } from "../../components"
import List from "../../components/list/List"
import Login from "../login/Login"
import Register from "../register/Register"
import "./Home.scss"

function Home() {
    return (
        <div className="home">
            {/* <Navbar />
            <Featured type="movies" />
            <List />
            <List />
            <List />
            <List />
            <List /> */}
            {/* <Register /> */}
            <Login />
        </div>
    )
}

export default Home
