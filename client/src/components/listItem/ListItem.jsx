import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.scss'

function ListItem({ item, index }) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/video/444454073?title=0&byline=0&portrait=0"
    const defaultImg = "https://st2.depositphotos.com/3687485/9010/v/600/depositphotos_90102796-stock-illustration-cinema-film-clapper-board-vector.jpg"
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        getMovieInfo();
    }, []);

    const getMovieInfo = async () => {
        try {
            const { data } = await axios.get("/movies/find/" + item,
                {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                }
            );
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!movie) return "loading..."
    return (
        <Link to={{ pathname: "/watch", movie: { movie } }}>
            <div className="listItem"
                style={{ left: isHovered && index * 225 - 50 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <img src={!movie ? defaultImg : movie.img} alt="" />

                {isHovered && (
                    <>
                        <video src={trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.title}</span>
                                {/* <span className="limit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nulla? Sequi, assumenda libero unde fugiat nisi ea veniam non nesciunt, animi consequuntur at ut aut debitis. Aut laudantium atque autem?</span> */}
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>)
                }
            </div>
        </Link>
    )
}

export default ListItem
