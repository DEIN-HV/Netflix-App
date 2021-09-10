import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react';
import './ListItem.scss'

function ListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/video/444454073?title=0&byline=0&portrait=0"
    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 }}
            onMouseEnter={() => setIsHovered(true)}
            onmouseleave={() => setIsHovered(false)}
        >
            <img src="https://vtv1.mediacdn.vn/thumb_w/650/2021/8/3/the-suicide-squad-online-quad-1200-1627960943694265347639.jpg" alt="" />

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
                            <span>Suicide Squat</span>
                            <span className="limit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nulla? Sequi, assumenda libero unde fugiat nisi ea veniam non nesciunt, animi consequuntur at ut aut debitis. Aut laudantium atque autem?</span>
                            <span>2021</span>
                        </div>
                        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corporis architecto? Aliquam beatae optio unde corrupti possimus pariatur ipsum quasi nisi animi officiis rem, praesentium soluta error reprehenderit maiores eligendi?</div>
                        <div className="genre">Action</div>
                    </div>
                </>)
            }
        </div>
    )
}

export default ListItem
