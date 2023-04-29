import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import toast, {Toaster} from 'react-hot-toast';
import {SixDictionary} from '../../data/SixDictionary';
import {getRndInteger} from '../../function/getRndInteger';

export const metadata = {
  title: 'Wordle/6-latter game',
  description: 'Wordle is a online games',
};

export default function Page() {
  //fixed class
  const fixedClass =
    'flex h-14 w-full flex-1 cursor-pointer select-none items-center justify-center rounded-[4px] bg-gray-30 font-semibold uppercase text-black focus:outline-none dark:bg-gray-70 dark:text-white p-4';
  const fixedClassD =
    'flex select-none items-center justify-center border-2 border-gray-30 text-3xl font-bold uppercase text-black dark:border-black-10 dark:text-white';

  //get random index
  const index = getRndInteger(0, SixDictionary.length);

  // set 6 word random value in the local storage
  useEffect(() => {
    localStorage.setItem('word', SixDictionary[index].toUpperCase());
  }, []);

  //row state 1-6
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);
  const [row5, setRow5] = useState([]);
  const [row6, setRow6] = useState([]);

  //enter state 1-5
  const [enter1, setEnter1] = useState(false);
  const [enter2, setEnter2] = useState(false);
  const [enter3, setEnter3] = useState(false);
  const [enter4, setEnter4] = useState(false);
  const [enter5, setEnter5] = useState(false);
  const [enter6, setEnter6] = useState(false);

  //exist 1-6 row
  const [exist1, setExist1] = useState([]);
  const [exist2, setExist2] = useState([]);
  const [exist3, setExist3] = useState([]);
  const [exist4, setExist4] = useState([]);
  const [exist5, setExist5] = useState([]);
  const [exist6, setExist6] = useState([]);

  //position right
  const [position1, setPosition1] = useState([]);
  const [position2, setPosition2] = useState([]);
  const [position3, setPosition3] = useState([]);
  const [position4, setPosition4] = useState([]);
  const [position5, setPosition5] = useState([]);
  const [position6, setPosition6] = useState([]);

  const handleValue = e => {
    let inputValue;
    if(e.target.value){
      inputValue = e.target.value
    }
    else{
      inputValue = e.key
    }
    console.log(inputValue)
   
    if (inputValue == 'enter' || inputValue == 'Enter') {
      if (row1.length == 6 && !enter1) {
        setEnter1(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row1String = row1.join('');

        //all value same
        if (row1String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition1(
            exist1.map((info, index) => {
              if (info && row1[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      } else if (row2.length == 6 && enter1 && row3.length != 6) {
        setEnter2(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row2String = row2.join('');

        //all value same
        if (row2String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition2(
            exist2.map((info, index) => {
              if (info && row2[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      } else if (row3.length == 6 && enter1 && enter2 && row4.length != 6) {
        setEnter3(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row3String = row3.join('');

        //all value same
        if (row3String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition3(
            exist3.map((info, index) => {
              if (info && row3[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      } else if (
        row4.length == 6 &&
        enter1 &&
        enter2 &&
        enter3 &&
        row5.length != 6
      ) {
        setEnter4(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row4String = row4.join('');

        //all value same
        if (row4String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition4(
            exist4.map((info, index) => {
              if (info && row4[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      } else if ( row5.length == 6 &&
        enter1 &&
        enter2 &&
        enter3 && 
        enter4 &&
        row6.length != 6) {
        setEnter5(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row5String = row5.join('');

        //all value same
        if (row5String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition5(
            exist5.map((info, index) => {
              if (info && row5[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      } else{
        setEnter6(true);

        const getWordFromLocalStorage = localStorage.getItem('word');
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const row6String = row6.join('');

        //all value same
        if (row6String === getWordFromLocalStorage) {
          toast.success('Your guess is right!');
          window.location.reload()
        } else {
          setPosition6(
            exist6.map((info, index) => {
              if (info && row6[index] === getWordFromLocalStorageArray[index]) {
                return true;
              } else {
                return false;
              }
            })
          );
        }
      }
    } else {
      if (row1.length < 6) {
        setRow1([...row1, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist1([...exist1, true]);
        } else {
          setExist1([...exist1, false]);
        }
      }

      if (row2.length < 6 && row1.length == 6 && enter1) {
        setRow2([...row2, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist2([...exist2, true]);
        } else {
          setExist2([...exist2, false]);
        }
      }

      if (
        row3.length < 6 &&
        row1.length == 6 &&
        row2.length == 6 &&
        enter1 &&
        enter2
      ) {
        setRow3([...row3, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist3([...exist3, true]);
        } else {
          setExist3([...exist3, false]);
        }
      }

      if (
        row4.length < 6 &&
        row1.length == 6 &&
        row2.length == 6 &&
        row3.length == 6 &&
        enter1 &&
        enter2 &&
        enter3
      ) {
        setRow4([...row4, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist4([...exist4, true]);
        } else {
          setExist4([...exist4, false]);
        }
      }

      if (
        row5.length < 6 &&
        row1.length == 6 &&
        row2.length == 6 &&
        row3.length == 6 &&
        row4.length == 6 &&
        enter1 &&
        enter2 &&
        enter3 &&
        enter4
      ) {
        setRow5([...row5, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist5([...exist5, true]);
        } else {
          setExist5([...exist5, false]);
        }
      }

      if (
        row6.length < 6 &&
        row1.length == 6 &&
        row2.length == 6 &&
        row3.length == 6 &&
        row4.length == 6 &&
        row5.length == 6 &&
        enter1 &&
        enter2 &&
        enter3 &&
        enter4 &&
        enter5
      ) {
        setRow6([...row6, inputValue.toUpperCase()]);

        //find word existing or not
        const getWordFromLocalStorageArray = localStorage
          .getItem('word')
          .split('');
        const index = getWordFromLocalStorageArray.indexOf(
          inputValue.toUpperCase()
        );
        if (index != -1) {
          setExist6([...exist6, true]);
        } else {
          setExist6([...exist6, false]);
        }
      }
    }
  };

  console.log(row1)
  console.log(row2)
  useEffect(() => {
    window.addEventListener('keydown', handleValue);
    return () => {
      window.removeEventListener('keydown', handleValue);
    };
  }, [handleValue]);

  
  return (
    <div>
      <div className="mx-auto flex h-app-content w-full max-w-lg flex-col items-center">
        <div className="display">
          <div className="flex w-full flex-grow items-center justify-center">
            <div
              className={`grid h-[372px] w-80 max-w-xs grid-cols-6 grid-rows-6 gap-[5px] p-2`}
            >
              <div
                className={`${fixedClassD} ${
                  exist1[0] && enter1 ? position1[0] ? 'bg-[#509C2C] text-white' : 'bg-[#C9B458] text-white': enter1 ? 'bg-black text-white' : undefined}`}
              >
                {row1[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist1[1] && enter1
                    ? position1[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter1 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row1[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist1[2] && enter1
                    ? position1[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter1 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row1[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist1[3] && enter1
                    ? position1[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter1 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row1[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist1[4] && enter1
                    ? position1[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter1 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row1[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist1[5] && enter1
                    ? position1[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter1 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row1[5]}
              </div>
              

              {/* row2 */}
              <div
                className={`${fixedClassD} ${
                  exist2[0] && enter2
                    ? position2[0]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist2[1] && enter2
                    ? position2[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist2[2] && enter2
                    ? position2[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist2[3] && enter2
                    ? position2[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist2[4] && enter2
                    ? position2[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist2[5] && enter2
                    ? position2[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter2 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row2[5]}
              </div>

             {/* row3 */}
              <div
                className={`${fixedClassD} ${
                  exist3[0] && enter3
                    ? position3[0]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist3[1] && enter3
                    ? position3[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist3[2] && enter3
                    ? position3[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist3[3] && enter3
                    ? position3[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist3[4] && enter3
                    ? position3[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist3[5] && enter3
                    ? position3[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter3 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row3[5]}
              </div>
               

               {/* row4 */}
              <div
                className={`${fixedClassD} ${
                  exist4[0] && enter4
                    ? position4[0]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist4[1] && enter4
                    ? position4[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist4[2] && enter4
                    ? position4[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist4[3] && enter4
                    ? position4[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist4[4] && enter4
                    ? position4[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist4[5] && enter4
                    ? position4[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    :  enter4 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row4[5]}
              </div>
              {/* row5 */}
              <div
                className={`${fixedClassD} ${
                  exist5[0] && enter5
                    ? position5[0]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist5[1] && enter5
                    ? position5[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist5[2] && enter5
                    ? position5[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist5[3] && enter5
                    ? position5[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist5[4] && enter5
                    ? position5[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist5[5] && enter5
                    ? position5[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter5 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row5[5]}
              </div>


              {/* row6 */}
              <div
                className={`${fixedClassD} ${
                  exist6[0] && enter6
                    ? position6[0]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[0]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist6[1] && enter6
                    ? position6[1]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[1]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist6[2] && enter6
                    ? position6[2]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[2]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist6[3] && enter6
                    ? position6[3]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[3]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist6[4] && enter6
                    ? position6[4]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[4]}
              </div>
              <div
                className={`${fixedClassD} ${
                  exist6[5] && enter6
                    ? position6[5]
                      ? 'bg-[#509C2C] text-white'
                      : 'bg-[#C9B458] text-white'
                    : enter6 ? 'bg-black text-white' : undefined
                }
`}
              >
                {row6[5]}
              </div>
            </div>
          </div>
        </div>
        <div className="typing">
          <div className="flex w-full flex-col items-center justify-center gap-2 px-2 pb-3 pt-1">
            <div className="flex w-full gap-2">
              <button className={fixedClass} onClick={handleValue} value="q">
                q
              </button>
              <button className={fixedClass} onClick={handleValue} value="w">
                w
              </button>
              <button className={fixedClass} onClick={handleValue} value="e">
                e
              </button>
              <button className={fixedClass} onClick={handleValue} value="r">
                r
              </button>
              <button className={fixedClass} onClick={handleValue} value="t">
                t
              </button>
              <button className={fixedClass} onClick={handleValue} value="y">
                y
              </button>
              <button className={fixedClass} onClick={handleValue} value="u">
                u
              </button>
              <button className={fixedClass} onClick={handleValue} value="i">
                i
              </button>
              <button className={fixedClass} onClick={handleValue} value="o">
                o
              </button>
              <button className={fixedClass} onClick={handleValue} value="p">
                p
              </button>
            </div>
            <div className="flex w-full gap-2 px-[5%]">
              <button className={fixedClass} onClick={handleValue} value="a">
                a
              </button>
              <button className={fixedClass} onClick={handleValue} value="s">
                s
              </button>
              <button className={fixedClass} onClick={handleValue} value="d">
                d
              </button>
              <button className={fixedClass} onClick={handleValue} value="f">
                f
              </button>
              <button className={fixedClass} onClick={handleValue} value="g">
                g
              </button>
              <button className={fixedClass} onClick={handleValue} value="h">
                h
              </button>
              <button className={fixedClass} onClick={handleValue} value="j">
                j
              </button>
              <button className={fixedClass} onClick={handleValue} value="k">
                k
              </button>
              <button className={fixedClass} onClick={handleValue} value="l">
                l
              </button>
            </div>
            <div className="flex w-full gap-2">
              <button className={fixedClass} onClick={handleValue} value="z">
                z
              </button>
              <button className={fixedClass} onClick={handleValue} value="x">
                x
              </button>
              <button className={fixedClass} onClick={handleValue} value="c">
                c
              </button>
              <button className={fixedClass} onClick={handleValue} value="v">
                v
              </button>
              <button className={fixedClass} onClick={handleValue} value="b">
                b
              </button>
              <button className={fixedClass} onClick={handleValue} value="n">
                n
              </button>
              <button className={fixedClass} onClick={handleValue} value="m">
                m
              </button>
              <button
                className={fixedClass}
                onClick={handleValue}
                value="enter"
              >
                Enter
              </button>
            </div>
            <div className="flex gap-2">
              <button className="rounded bg-green-100 px-5 py-2" onClick={()=> window.location.reload()}>
                New Game
              </button>
              <Link href={'/'}>
                <button className="rounded bg-green-100 px-5 py-2">Home</button>
              </Link>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
}
