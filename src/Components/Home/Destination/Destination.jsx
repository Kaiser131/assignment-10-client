import { Link } from "react-router-dom";

const Destination = () => {
    return (
        <div>


            <section className="bg-white dark:bg-gray-900 py-10">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Destination
                    </h1>



                    {/* <>
                      
                       
                      
                       
                        
                       
                    </> */}


                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url(' https://i.ibb.co.com/MZfDskT/pexels-pixabay-34223.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">France</h2>
                                <Link to='/france' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url('https://i.ibb.co.com/4fy5pFM/pexels-jacobmorch-497845.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">Italy</h2>
                                <Link to='/italy' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url(' https://i.ibb.co.com/TBW3kSN/pexels-apasaric-1388030.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">Spain</h2>
                                <Link to='/spain' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url('  https://i.ibb.co.com/wQTgyns/pexels-dominikagregus-672532.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">England</h2>
                                <Link to='/england' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url(' https://i.ibb.co.com/q5zdnF6/pexels-kayla-ihrig-47825-3424845.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">Netherlands</h2>
                                <Link to='/netherlands' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage: "url('  https://i.ibb.co.com/mv6mrx9/pexels-nextvoyage-2779863.jpg')"
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-4xl font-semibold text-white capitalize">Switzerlands</h2>
                                <Link to='/switzerlands' className="mt-2 text-lg tracking-wider text-blue-400 uppercase">see all</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    );
};

export default Destination;