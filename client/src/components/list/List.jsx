import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './List.scss'

function List() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [isLast, setIsLast] = useState(false);
    const listRef = useRef();
    const handleSliderClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            if (slideNumber == 1) setIsMoved(false);
            setIsLast(false);

            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber - 1);
        }

        if (direction === "right" && slideNumber < 5) {
            if (slideNumber == 4) setIsLast(true);
            setIsMoved(true);

            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber + 1);

        }
    }

    return (
        <div className="list">
            <span className="listTitle">
                Continue watch
            </span>

            <div className="wrapper">
                <ArrowBackIosOutlined
                    style={{ display: !isMoved && "none" }}
                    className="sliderArrow left"
                    onClick={() => handleSliderClick("left")} />
                <div className="container" ref={listRef} >
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />

                </div>
                <ArrowForwardIosOutlined
                    style={{ display: isLast && "none" }}
                    className="sliderArrow right"
                    onClick={() => handleSliderClick("right")} />
            </div>
        </div>
    )
}

export default List
