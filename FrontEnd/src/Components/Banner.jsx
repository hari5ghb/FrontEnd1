import banner from '../assets/digi.png'
import "@fontsource/poppins";


const Banner = () => {
    return (
        <>
            <div className="w-full h-auto mt-5 p-10 py-16 bg-slate-100">
                <div className='flex gap-2'>
                    <div className='w-1/2 p-10 text-center bg-white rounded-lg shadow-lg'>
                        <h2 className='mt-5 font-bold text-5xl font-poppins '>Welcome To <span className='text-indigo-700'>DIGI-FYNIX</span>  Your Business Growth Partner</h2>
                        <h3 className='mt-16 text-start font-semibold font-poppins text-orange-500'>About D-MAS (Business Marketing Solution)</h3>
                        <p className='mt-5 text-start font-normal'>At D-MAS (Business Marketing Solution), we transform how businesses connect with their audiences by crafting tailored digital marketing strategies.</p>
                        <p className='mt-5 text-start font-normal'>By combining innovative approaches, data-driven insights, and cutting-edge tools, we ensure your brand resonates with the right audience and delivers measurable results.</p>
                        <p className='mt-5 text-start font-normal'>Our focus on collaboration, transparency, and growth enables us to turn your business goals into achievements, empowering you to thrive in the ever-evolving digital landscape.</p>
                    </div>
                    <div className='w-1/2 p-5 bg-white rounded-lg shadow-lg'>
                        <img src={banner} width={600} height={400} className='rounded-2xl ml-10'/>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Banner;