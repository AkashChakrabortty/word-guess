import React from 'react';
import Link from 'next/link';
import { array } from '../data/array';

const TypingKeyboard = () => {
    const fixedClass = 'flex h-14 w-full flex-1 cursor-pointer select-none items-center justify-center rounded-[4px] bg-gray-30 font-semibold uppercase text-black focus:outline-none dark:bg-gray-70 dark:text-white p-4'
    const handleValue = (e)=> {
     array.push(e.target.innerHTML)
    }
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center gap-2 px-2 pb-3 pt-1">
        <div className="flex w-full gap-2">
          <button className={fixedClass} onClick={handleValue}>
            q
          </button>
          <button  className={fixedClass}>
            w
          </button>
          <button  className={fixedClass}>
            e
          </button>
          <button  className={fixedClass}>
            r
          </button>
          <button  className={fixedClass}>
            t
          </button>
          <button  className={fixedClass}>
            y
          </button>
          <button  className={fixedClass}>
            u
          </button>
          <button  className={fixedClass}>
            i
          </button>
          <button className={fixedClass}>
            o
          </button>
          <button className={fixedClass}>
            p
          </button>
        </div>
        <div className="flex w-full gap-2 px-[5%]">
          <button  className={fixedClass}>
            a
          </button>
          <button  className={fixedClass}>
            s
          </button>
          <button  className={fixedClass}>
            d
          </button>
          <button  className={fixedClass}>
            f
          </button>
          <button  className={fixedClass}>
            g
          </button>
          <button  className={fixedClass}>
            h
          </button>
          <button  className={fixedClass}>
            j
          </button>
          <button  className={fixedClass}>
            k
          </button>
          <button  className={fixedClass}>
            l
          </button>
        </div>
        <div className="flex w-full gap-2">
          <button  className={fixedClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 44.18 44.18"
              height="24"
              width="24"
            >
              <path d="M10.625,5.09L0,22.09l10.625,17H44.18v-34H10.625z M42.18,37.09H11.734l-9.375-15l9.375-15H42.18V37.09z"></path>
              <polygon points="18.887,30.797 26.18,23.504 33.473,30.797 34.887,29.383 27.594,22.09 34.887,14.797 33.473,13.383 26.18,20.676      18.887,13.383 17.473,14.797 24.766,22.09 17.473,29.383  "></polygon>
            </svg>
          </button>
          <button className={fixedClass}>
            z
          </button>
          <button  className={fixedClass}>
            x
          </button>
          <button  className={fixedClass}>
            c
          </button>
          <button  className={fixedClass}>
            v
          </button>
          <button  className={fixedClass}>
            b
          </button>
          <button  className={fixedClass}>
            n
          </button>
          <button  className={fixedClass}>
            m
          </button>
          <button  className={fixedClass}>
            Enter
          </button>
        </div>
        <div className="flex gap-2">
          <button className="rounded bg-green-100 px-5 py-2">New Game</button>
          <Link href={'/'}>
          <button className='bg-green-100 rounded px-5 py-2'>Home</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default TypingKeyboard;
