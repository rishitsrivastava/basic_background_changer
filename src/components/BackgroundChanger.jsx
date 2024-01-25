import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (

    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow' style={{backgroundColor: backgroundColor}}>

      </div>
      <footer className="fixed justify-center items-center bottom-0 pb-4 pl-32">
        <div className='flex justify-center items-center text-white'>
          <button onClick={(e) => {changeBackground('#ff0000')}} className='bg-red-500 rounded-full w-[5rem] h-[2rem]'>Red</button>
          <button onClick={(e) => {changeBackground('#ffff00')}} className='bg-yellow-500 rounded-full w-[5rem] h-[2rem]'>Yellow</button>
          <button onClick={(e) => {changeBackground('#000000')}} className='bg-black rounded-full w-[5rem] h-[2rem]'>Black</button>
          <button onClick={(e) => {changeBackground('#800080')}} className='bg-purple-500 rounded-full w-[5rem] h-[2rem]'>Purple</button>
          <button onClick={(e) => {changeBackground('#008000')}} className='bg-green-500 rounded-full w-[5rem] h-[2rem]'>Green</button>
          <button onClick={(e) => {changeBackground('#0000ff')}} className='bg-blue-500 rounded-full w-[5rem] h-[2rem]'>Blue</button>
          <button onClick={(e) => {changeBackground('#ffffff')}} className='bg-slate-500 rounded-full w-[5rem] h-[2rem]'>Default</button>
        </div>
      </footer>
    </div>

  );
};

export default BackgroundChanger;
