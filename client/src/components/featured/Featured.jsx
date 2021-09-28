import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Featured.scss'

function Featured({ type }) {

    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const { data } = await axios.get(`/movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                );
                setContent(data[0]);
                console.log(data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    }, [type]);
    return (
        <div className="featured">
            {type == "series" &&
                <div className="category">
                    <span>
                    </span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>}


            {/* <img src={content.img}
                alt=""
            /> */}
            <img src="http://sharptv24.com/wp-content/uploads/2020/09/id-p3t57mo8euc-youtube-automatic.jpg" />
            <div className="info">
                <img style={{ opacity: 0 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ex adipisci excepturi inventore accusantium similique perspiciatis odit nulla qui ut! Quos officiis nemo expedita vero ea eaque unde commodi molestias.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Featured
