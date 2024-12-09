
import "@fontsource/poppins";
import whyusimg from '../assets/WHY US.png'

const Whyus = () => {
    return (
        <>
            <div className='container mt-10 ml-28 text-center'>
                <h1 className='text-4xl font-roboto font-semibold mb-5 text-red-500'>Why Us...</h1>
                <span><hr /><hr /><hr /></span>
            </div>
            <div className="w-full h-auto mt-5 p-10 py-16">
                <div className='flex gap-2'>
                    <div className='w-1/2 p-5 bg-white rounded-lg drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-95'>
                        <img src={whyusimg} width={600} height={400} className='rounded-2xl ml-10 mt-10' />
                    </div>
                    <div className='w-1/2 p-10 text-center bg-white rounded-lg drop-shadow-lg hover:drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95'>
                        <h2 className='mt-5 font-bold text-3xl font-poppins '><span className='text-indigo-700'>Why Us</span></h2>
                        <p className='mt-5  font-thin text-md text-left'>
                            At our core, we are dedicated to empowering businesses and entrepreneurs with the tools and strategies needed for success.</p>
                        <p className='mt-5  font-thin text-md text-left'>Our services are designed to address every critical aspect of your journey, ensuring a seamless path to growth. With our <span className='text-purple-500 font-semibold'>Entrepreneur Policy Framework</span>, we help you navigate policies, compliance, and strategic planning to establish a solid foundation.</p>
                        <p className='mt-5  font-thin text-md text-left'>Our <span className='text-purple-500 font-semibold'>Business Process Framework</span> streamlines your operations, optimizing workflows and integrating automation for enhanced efficiency.</p>
                        <p className='mt-5  font-thin text-md text-left'>Through our <span className='text-purple-500 font-semibold'>Financial Assistance Framework</span>, we provide tailored funding solutions and financial planning to support your aspirations.</p>
                        <p className='mt-5  font-thin text-md text-left'>Additionally, our <span className='text-purple-500 font-semibold'>Marketing Assistance</span> focuses on creating impactful strategies to elevate your brand’s visibility and reach in competitive markets.</p>
                        <p className='mt-5  font-thin text-md text-left'> Whether you're starting out or scaling up, we are your trusted partner, providing end-to-end support to turn challenges into opportunities and help your business thrive. Let us guide you toward sustainable success.</p>
                    </div>
                    
                </div>
            </div>
        </>

    );
}
export default Whyus;