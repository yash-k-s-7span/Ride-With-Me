import cancel from '../../assets/signup/cancel.svg'
import congrats from '../../assets/signup/congrats.svg'

const Successfull = () => {
  return (
    <div className="container h-svh flex items-center">
        <div className='bg-congratsBg h-72 flex flex-col rounded-lg'>
            <div className='flex justify-end mr-4 mt-5'>
                <img src={cancel} alt='cancel button'/>
            </div>
            <span className='font-poppins text-2xl mt-3 font-semibold'>Your verification was successful</span>
           <div className='flex justify-center grow'>
              <img src={congrats} alt='congrats' className='size-20 flex justify-center'/>
            </div>
            <div className='px-5 mb-4 mt-4'>
              <button type="submit" className="bg-BrandColor h-11 w-36 rounded-lg font-poppins gap-2 text-white font-normal text-sm">Let’s ride!</button>
            </div>
        </div>
    </div>
  );
}

export default Successfull;
