import data from "./data";
import Image from "./Image";
export default function Gallery() {
    return (
        <>
            <div className="gallery">
                {data.map((item) => {
                    return <Image key={item.src.large} item={item} />;
                })}
            </div>
        </>
    );
}
