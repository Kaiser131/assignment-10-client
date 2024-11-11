import Advertise from "./Advertise/Advertise";
import Album from "./Album/Album";
import Carousel from "./Carousel/Carousel";
import Destination from "./Destination/Destination";
import NewsLetter from "./NewsLetter/NewsLetter";
import Recent from "./Recent/Recent";
import Team from "./Team/Team";

const Home = () => {
    return (
        <div>

            <Carousel></Carousel>
            <Destination></Destination>
            <Advertise></Advertise>
            <Album></Album>
            <Recent></Recent>
            <NewsLetter></NewsLetter>
            <Team></Team>

        </div>
    );
};

export default Home;