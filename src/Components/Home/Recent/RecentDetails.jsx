import { useLoaderData } from "react-router-dom";
import Connect from "../../Connect/Connect";

const RecentDetails = () => {

    const data = useLoaderData();

    const { image, author, author_status, article_heading, article } = data;


    return (
        <div>

            <div>
                <img className="max-h-[700px] w-full object-fill -mt-[72px] " src={image} alt="" />
                <div className="space-y-5 max-w-[1200px] mx-auto my-12">
                    <h1 className="text-4xl">{article_heading}</h1>
                    <p className="text-2xl text-blue-600">{author}</p>
                    <p className="text-red-600">{author_status}</p>
                    <p className="">{article}</p>
                    <Connect></Connect>
                </div>
            </div>



        </div>
    );
};

export default RecentDetails;