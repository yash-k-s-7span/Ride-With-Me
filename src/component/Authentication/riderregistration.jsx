const RiderRegistration = () => {
  return (
    <div className="container pt-16">
         {/* <!--[--> */}
        <div className="flex justify-start">
            <h1 className="font-poppins text-black font-semibold text-4xl">Vechile</h1>
        </div>
        <p className="text-grayB mt-3 font-poppins text-left text-sm font-normal">The last step is to fill out your vehicle information </p>
            <form className="mt-9">
                <label className="text-black flex justify-start font-poppins font-medium text-base">Model</label>
                <div className='flex'>
                    <select id="model" className="mt-2 font-poppins w-full text-grayB px-4 border-2 h-14 border-grayB rounded-md" required >
                        <option disabled selected className="">Select car model</option>
                    </select>
                   
                </div>
            </form>
      

    </div>
  );
}

export default RiderRegistration;
