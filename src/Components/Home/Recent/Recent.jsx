import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recent = () => {

    const [article, setArticle] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data));

    }, []);

    const cuttedArticle = article.slice(0, 3);


    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">

                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            From the blog
                        </h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                            pie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">


                        {cuttedArticle.map((got) => <div key={got.id}>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={got.image} alt="" />

                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                                    <img
                                        className="object-cover object-center w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt=""
                                    />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{got.author}</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{got.author_status}</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                {got.article_heading}
                            </h1>

                            <hr className="w-32 my-6 text-blue-500" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {got.article.slice(0, 200)}...
                            </p>

                            <Link to={`/article/${got.id}`} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400 capitalize">see more</Link>

                        </div>)}






                    </div>
                </div>
            </section>



        </div>
    );
};

export default Recent;