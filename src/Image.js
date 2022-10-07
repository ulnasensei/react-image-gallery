import { useState } from "react";
export default function Image({ item }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const hoverStyle = {
        transform: isHover ? "scale(1.1)" : "scale(.85)",
        transition: "transform 0.4s ease",
    };

    return (
        <figure className="imageFig">
            <div className="imageContainer">
                <img
                    src={item.src.large}
                    alt="photograph"
                    className="image"
                    style={hoverStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></img>
            </div>
            <figcaption>{item.photographer}</figcaption>
        </figure>
    );
}
