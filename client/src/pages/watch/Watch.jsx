import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src=""/>
        </div>
    );
}
