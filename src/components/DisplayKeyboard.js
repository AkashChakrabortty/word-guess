import React, { useEffect, useState } from 'react';
import { array } from '../data/array';

const DisplayKeyboard = ({col}) => {
    const fixedClass = 'flex select-none items-center justify-center border-2 border-gray-30 text-3xl font-bold uppercase text-black dark:border-black-10 dark:text-white';
  return (
    <div>
      <div class="flex w-full flex-grow items-center justify-center">
        <div class={`grid h-[372px] w-80 max-w-xs grid-cols-${col} grid-rows-6 gap-[5px] p-2`}>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
          <div className={fixedClass}></div>
        </div>
      </div>
    </div>
  );
};

export default DisplayKeyboard;
