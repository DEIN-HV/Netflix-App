import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/y881t8ilMyc" />
            {/* <video controls>
                <source src="video.mp4" type="video/mp4" />
            </video> */}

        </div>
    );
}
