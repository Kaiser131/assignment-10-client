
const AddTravels = () => {
    return (
        <div className="my-20 mx-10">

            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-5">
                    <h1 className="text-5xl">Admin</h1>
                    <p className="text-2xl">Upload a new Tourism Data</p>
                </div>

                <form>

                    {/* Image */}
                    <div className="space-y-4 my-8">
                        <h1 className="text-2xl">Image</h1>
                        <div className="flex justify-between gap-4">
                            <div className="w-1/2">
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Image URL</label>
                                <input
                                    type="text"
                                    placeholder="example.com"
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                <input
                                    type="file"
                                    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Information */}

                    <div className="space-y-4 my-8">
                        <h1 className="text-2xl">Information</h1>
                        <div className="flex justify-between gap-4">
                            <div className="w-1/2">
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Tourist Spot Name</label>
                                <input
                                    type="text"
                                    placeholder="name..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Country Name</label>
                                <input
                                    type="text"
                                    placeholder="country..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Location</label>
                            <input
                                type="text"
                                placeholder="Location..."
                                className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300">Description</label>

                            <textarea
                                placeholder="Information..."
                                className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                            ></textarea>
                        </div>

                    </div>

                    {/* Additional Information */}

                    <div className="space-y-4 my-8">

                        <h1 className="text-2xl">Additional Information</h1>

                        <div className="grid grid-cols-2 justify-between gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Average Cost</label>
                                <input
                                    type="text"
                                    placeholder="cost..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Seasonality</label>
                                <input
                                    type="text"
                                    placeholder="season..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Travel Time</label>
                                <input
                                    type="text"
                                    placeholder="time..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Total Visitor per...</label>
                                <input
                                    type="text"
                                    placeholder="year..."
                                    className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                            </div>
                        </div>

                    </div>

                    <input className="btn btn-outline px-10" type="submit" value="Add" />

                </form>

            </div>

        </div>
    );
};

export default AddTravels;