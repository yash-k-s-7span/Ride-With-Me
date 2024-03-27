import  { useState, useRef, useEffect } from 'react';

function Verify() {
  const [codes, setCodes] = useState(['', '', '', '']);
  const codeInputs = useRef([]);

  useEffect(() => {
    codeInputs.current[0].focus();
  }, []);

  const handleChange = (index, e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value !== '' && index < 3) {
        codeInputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
      codeInputs.current[index - 1].focus();
    }
  };

  return (
    <div>
        <div className='container pt-16'>
            <div className='flex justify-start'>
                <h1 className='text-black font-poppins text-4xl'>Verify</h1>
            </div>
            <div className="mt-2 flex justify-start">
                <p className="text-grayB text-wrap font-poppins text-sm font-normal">Enter the code sent to xxxxx xxxxx</p>
            </div>
      <div className="flex grow h-64 mt-8">
        {codes.map((code, index) => (
          <input
            key={index}
            type="text"
            id={`verificationCode${index}`}
            name={`verificationCode${index}`}
            value={code}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(input) => (codeInputs.current[index] = input)}
            maxLength="1"
            autoComplete="off"
            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          />
        ))}
           </div>
            <div className='flex border-2  mt-9 font-thin rounded-xl bg-BrandColor'>
                <button type="submit" className="font-poppins w-full py-4 px-4 gap-2 text-white font-normal text-sm">Continue</button>
            </div>
        
      </div>
      
    </div>
  );
}

export default Verify;

