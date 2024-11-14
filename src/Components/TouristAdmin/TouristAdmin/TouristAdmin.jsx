import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const TouristAdmin = () => {

    const [tourism, setTourism] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTourism(data);
            });
    }, []);


    return (
        <div className="max-w-[1280px] mx-auto  ">

            <div className="space-y-10 my-10">
                <h1 className="text-center text-4xl">Admin Panel Tourist Spots</h1>

                <div >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            tourism.map((got, idx) => <Cards given={got} key={idx}></Cards>)
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default TouristAdmin;