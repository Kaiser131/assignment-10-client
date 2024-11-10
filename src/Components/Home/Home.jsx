import Advertise from "./Advertise/Advertise";
import Album from "./Album/Album";
import Carousel from "./Carousel/Carousel";
import Destination from "./Destination/Destination";
import NewsLetter from "./NewsLetter/NewsLetter";
import Recent from "./Recent/Recent";

const Home = () => {
    return (
        <div>

            <Carousel></Carousel>
            <Destination></Destination>
            <Advertise></Advertise>
            <Album></Album>
            <Recent></Recent>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;