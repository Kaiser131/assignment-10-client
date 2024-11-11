import { useLoaderData, useParams } from "react-router-dom";

const RecentDetails = () => {

    const id = useParams();
    const data = useLoaderData();



    return (
        <div>

            <h1>This is the new one{id.id}</h1>

        </div>
    );
};

export default RecentDetails;