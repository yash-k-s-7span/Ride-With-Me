import upload from '../../assets/signup/upload.svg'
const RiderRegistration = () => {
  return (
    <div className="container pt-16">
         {/* <!--[--> */}
        <div className="flex justify-start">
            <h1 className="font-poppins text-black font-semibold text-4xl">Vechile</h1>
        </div>
        <p className="text-grayB mt-3 font-poppins text-left text-sm font-normal">The last step is to fill out your vehicle information </p>
            <form className="mt-9">
                <label className="text-black flex justify-start font-poppins font-medium text-xl">Model</label>
                <div className='flex'>
                    <select id="model" className="mt-2 font-poppins w-full text-grayB px-4 border-2 h-14 border-grayB rounded-md" required >
                        <option disabled selected className="">Select car model</option>
                    </select>
                </div>
                <label className="text-black flex mt-4 justify-start font-poppins font-medium text-xl">Year</label>
                <div className='flex'>
                    <select id="model" className="mt-2 font-poppins w-full text-grayB px-4 border-2 h-14 border-grayB rounded-md" required >
                        <option disabled selected className="">Select</option>
                    </select>
                </div>
             
                <h2 className="text-black font-poppins mt-14  flex justify-start font-semibold text-xl">Document</h2>                   
   
                    <h3 className='font-poppins text-base mt-9 font-medium flex justify-start'>Driver’s license<span className='text-BrandColor text-base'>*</span></h3>
                    <div className='border-2 border-grayB mt-2 border-dashed h-28 w-28 flex justify-center items-center'>
                        <div className='flex flex-col'>
                        <label htmlFor="upload-photo" className='flex justify-center'><img src={upload} alt="upload" ></img></label>
                            <input type="file" name="photo" id="upload-photo" />
                            <span className='font-poppins text-grayB text-sm italic flex justify-start'>Upto 1MB</span>
                        </div>
                    </div>
            </form>
    </div>
  );
}

export default RiderRegistration;
