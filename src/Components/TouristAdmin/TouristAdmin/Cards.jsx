
const Cards = ({ given }) => {

    const { _id, spotCost, spotCountry, spotDescription, spotImage, spotLocation, spotName, spotSeason, spotTime, spotVisitor } = given;

    return (
        <div className="flex justify-center mx-5">

            <div className='max-w-[320px] rounded-2xl overflow-hidden min-h-[450px] relative group'>
                <img className='w-full h-full object-cover object-center rounded-2xl ' src={spotImage} alt="" />

                <div className='w-full h-full absolute top-0 right-[-100%] group-hover:right-0 transition-all duration-[1.5s] bg-[#1f3d4738] p-10 text-white backdrop-blur-sm rounded-2xl flex flex-col justify-center'>
                    <h1 className='uppercase text-4xl font-medium'>{spotName}</h1>
                    <p className='capitalize text-sm font-light'>Sub {spotLocation}</p>
                    <p className='leading-6 my-10'>{spotDescription.slice(0, 100)}...</p>
                    <button className='btn btn-outline text-white capitalize max-w-[120px]'>SEE MORE</button>
                </div>

            </div>

        </div>
    );
};

export default Cards;