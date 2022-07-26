import React, { useState , useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Helmet } from 'react-helmet';

import "./Styles/Home.css";

const Home = () => {
<Helmet>
        <title>Calculator in React</title>
</Helmet>

// More Options Toggle  Starts
    const [ showOptions ,setShowOptions ] = useState(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }
// More Options Toggle  Ends


// Toggles theme Modal Start
const [ showThemesModal ,setShowThemesModal ] = useState(false);
const toggleThemeModal = () => {
    setShowThemesModal(!showThemesModal);
    setShowOptions(!showOptions)
}
// Toggles theme Modal Ends


//  Themes Start
useEffect( () => {
    document.body.className = 'light-theme';
},[] )
    const changeTheme = (theme) => {
        theme = theme || "light";
        document.body.className = theme;
        setShowThemesModal(!showThemesModal)
    }

//  Themes Ends
//  Set Icon Size Here For Calculators Button
const [iconSize, setIconSize ] = useState(48);//available size 24,48,96,192,384

    const [forCalc , setForCalc] = useState("");
    const [forScreen , setForScreen] = useState("");
    const [result , setResult] = useState("");

    const ops = ["*" , "/" , "-" , "+" , "." , "." , "**" , "/100*" , ""];

    const calcUpdate = value => {
        if( ops.includes(value) && forCalc === "" || ops.includes(value) && ops.includes(forCalc.slice(-1)))
        {
                return;
            }
            setForCalc( forCalc + value ) ;
        }

    const screenUpdate = value => {
        if( ops.includes(value) && forScreen === "" || ops.includes(value) && ops.includes(forScreen.slice(-1))){
                return;
            }
        setForScreen( forScreen + value ) ;
    }

//  Backspace (Remove Last Character From The Screen)
    function backSpace(){
        setForCalc(forCalc.slice(0,-1));
        setForScreen(forScreen.slice(0,-1));
    }

//  AC (Sets The Screen & Calc To Zero)
    function resetStates(){
        setForCalc("");
        setResult("");
        setForScreen("");
    }

//  Equals To (Show Results After Calculation)
    function showResults(){
        setForScreen( eval(forCalc) );
    }

return (
<>
{/* Full Page Start */}
    <div className="flex w-full h-screen page ">
{/* Calculator Body Start */}
        <div className={`flex flex-col w-1/4  m-auto body rounded-2xl min-w-92 screen-items drop-shadow-xl shadow-gray-900 shadow-md`}>
{/* Calculator's Screen Start */}
<div className={`themes-modal ${ showThemesModal ? "show" : "hide" } `}>
                        <label className='my-4 text-2xl ' htmlFor="themes">Themes</label>
                        <ul>
                            <li onClick={ () =>{ changeTheme("light-theme") } } >Light</li>
                            <li onClick={ () =>{ changeTheme("dark-theme") } } >Dark</li>
                            <li onClick={ () =>{ changeTheme("pink-theme") } } >Pink</li>
                            <li onClick={ () =>{ changeTheme("green-theme") } } >Green</li>
                        </ul>
                    </div>
            <div className='relative flex max-w-full p-2 h-60 rounded-b-3xl rounded-t-2xl fullScreen'>
                <div className='absolute scale-150 right-2 top-8'>
{/* More Options Starts  */}
                    <BsThreeDotsVertical onClick={ () =>{ toggleOptions() } } className='scale-150 screen-items ' />
{/* More Options Ends  */}
{/* Options Modal Starts */}
                    <div className={`options-modal ${ showOptions ? "show" : "hide" } `}>
                        <ul className='w-fit' >
                            <li onClick={ () =>{ toggleThemeModal() } } className='w-fit' >Choose Theme</li>
                        </ul>
                    </div>
{/* Options Modal Ends */}
{/* Theme Modal Starts */}
{/* Theme Modal Ends */}
                </div>
                <div className="items-end pb-8 text-6xl screen">
{/* Cursor  Starts */}
                    <div className="cursor "></div>
{/* Cursor  Ends */}
                    { forScreen || "0" }
                </div>
            </div>
{/* Calculator's Screen End */}
{/* Calculator's Button Start */}
                <div className='flex flex-col w-full mx-auto my-2'>
{/* Button Grid Start */}
                <div className='grid w-full grid-cols-4 py-2 m-auto body h-fit aspect-square gap-x-4 gap-y-4 '>
{/* Pi */}
                    <div onClick={ ()=>{calcUpdate("*Math.PI"); screenUpdate("π")} }  className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='π' src={`https://img.icons8.com/material-outlined/${iconSize}/1A1A1A/pi.png`}/>
                    </div>
{/* To The Power */}
                    <div onClick={ ()=>{calcUpdate("**"); screenUpdate("^")} } className="text-black shadow-gray-900 button hover:shadow-gray-700">^</div>
{/* Percentages */}
                    <div onClick={ ()=>{calcUpdate("/100*"); screenUpdate("%")} } className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='%' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/percentage.png`}/>
                    </div>
{/* Divide */}
                    <div onClick={ ()=>{calcUpdate("/"); screenUpdate("÷")} } className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='/' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/divide.png`}/>
                    </div>
{/* AC */}
                    <div onClick={ () => resetStates() } className="corner shadow-gray-900 button hover:shadow-gray-700">AC</div>
{/* Open Brackets */}
                    <div onClick={ ()=>{calcUpdate("("); screenUpdate("(")} } className=" shadow-gray-900 button hover:shadow-gray-700">
                        <div >(</div>
                    </div>
{/* Close Brackets */}
                    <div  onClick={ ()=>{calcUpdate(")"); screenUpdate(")")}}className=" shadow-gray-900 button hover:shadow-gray-700">
                        <div> ) </div>
                    </div>
{/* Multiply */}
                    <div onClick={ ()=>{calcUpdate("*"); screenUpdate("x")} } className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='*' src={`https://img.icons8.com/material-outlined/${iconSize}/1A1A1A/multiply--v1.png`}/>
                    </div>
{/* 7 */}
                    <div onClick={ ()=>{calcUpdate("7"); screenUpdate("7")} } className="number shadow-gray-900 button hover:shadow-gray-700">7</div>
{/* 8 */}
                    <div onClick={ ()=>{calcUpdate("8"); screenUpdate("8")} } className="number shadow-gray-900 button hover:shadow-gray-700">8</div>
{/* 9 */}
                    <div onClick={ ()=>{calcUpdate("9"); screenUpdate("9")} } className="number shadow-gray-900 button hover:shadow-gray-700">9</div>
{/* Minus */}
                    <div onClick={ ()=>{calcUpdate("-"); screenUpdate("-")}} className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='-' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/minus.png`}/>
                    </div>
{/* 4 */}
                    <div onClick={ ()=>{calcUpdate("4"); screenUpdate("4")} } className="number shadow-gray-900 button hover:shadow-gray-700">4</div>
{/* 5 */}
                    <div onClick={ ()=>{calcUpdate("5"); screenUpdate("5")}} className="number shadow-gray-900 button hover:shadow-gray-700">5</div>
{/* 6 */}
                    <div onClick={ ()=>{calcUpdate("6"); screenUpdate("6")}} className="number shadow-gray-900 button hover:shadow-gray-700">6</div>
{/* Plus */}
                    <div onClick={ ()=>{calcUpdate("+"); screenUpdate("+")}} className=" shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='+' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/plus-math--v1.png`}/>
                    </div>
{/* 1 */}
                    <div onClick={ ()=>{calcUpdate("1"); screenUpdate("1")}} className="number shadow-gray-900 button hover:shadow-gray-700">1</div>
{/* 2 */}
                    <div onClick={ ()=>{calcUpdate("2"); screenUpdate("2")}} className="number shadow-gray-900 button hover:shadow-gray-700">2</div>
{/* 3 */}
                    <div onClick={ ()=>{calcUpdate("3"); screenUpdate("3")}} className="number shadow-gray-900 button hover:shadow-gray-700">3</div>
{/* Backspace */}
                    <div onClick={ ()=>{ backSpace()} } className="number shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='clear' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/clear-symbol--v1.png`}/>
                    </div>
{/* 0 */}
                    <div onClick={ ()=>{calcUpdate("00"); screenUpdate("00")}} className="number shadow-gray-900 button hover:shadow-gray-700">00</div>
{/* 00 */}
                    <div onClick={ ()=>{calcUpdate("0"); screenUpdate("0")}} className="number shadow-gray-900 button hover:shadow-gray-700">0</div>
{/* Point dot */}
                    <div onClick={ ()=>{calcUpdate("."); screenUpdate(".")}} className="number shadow-gray-900 button hover:shadow-gray-700">.</div>
{/* Equals */}
                    <div onClick={()=>{showResults()} } className="corner shadow-gray-900 button hover:shadow-gray-700">
                        <img alt='=' src={`https://img.icons8.com/material-rounded/${iconSize}/000000/equal-sign.png`}/>
                    </div>
                </div>
{/* Button Grid Start */}
                </div>
{/* Calculator's Button End */}
        </div>
{/* Calculator Body End */}
    </div>
{/* Full Page End */}
</>
)}

export default Home;