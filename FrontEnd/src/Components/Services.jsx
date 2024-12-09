const Services = () => {
    return (
        <>
            <div className='container mt-10 ml-28 text-center'>
                <h1 className='text-4xl font-roboto font-semibold mb-5 text-red-500'>Our Services...
                </h1>
                <span><hr /><hr /><hr /></span>
            </div>
            <div className="w-full h-auto mt-2 p-10 py-16">
                <div className='container ml-20 p-5 flex flex-wrap gap-2 '>
                    <div className='w-auto p-10 text-center text-md font-semibold bg-purple-300 rounded-lg drop-shadow-lg hover:drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95 '>
                        <h2>Entrepreneur Policy Framework</h2>
                    </div>
                    <div className='w-auto p-10 text-center text-md font-semibold bg-emerald-400 rounded-lg drop-shadow-lg hover:drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95'>
                        <h2>Business Process Framework</h2>
                    </div>
                    <div className='w-auto p-10 text-center text-md font-semibold bg-blue-400 rounded-lg drop-shadow-lg hover:drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95'>
                        <h2>Financial Assistance Framework</h2>
                    </div>
                    <div className='w-72 p-10 text-center text-md font-semibold bg-red-400 rounded-lg drop-shadow-lg hover:drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95'>
                        <h2>Marketing Assistance</h2>
                    </div>
                    <button className="m-5 bg-indigo-400 p-3 rounded-lg text-white hover:bg-indigo-600 ">View More..</button>
                </div>


            </div>
        </>
    );
}

export default Services;