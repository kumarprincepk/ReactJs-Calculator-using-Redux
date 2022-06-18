import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadButtons,loadClear,loadBackspace,loadAnswer,loadSin,loadCos,loadTan, loadLog} from '../redux/calculatorRedux/Action';
import {CALCULATOR_KEY} from '../redux/calculatorRedux/Reducer'
import Sci_fyCalcy from './Sci_fyCalcy';

export default function Calculator() {
  const dispatch = useDispatch()
  // const [visible,setVisible]=useState(false);
  
  const viewCalculator = useSelector((state)=>{
    return state[CALCULATOR_KEY]
  })
  const handleAnswer = (e) =>{
    e.preventDefault()
    console.log(viewCalculator)
    if(viewCalculator.number.substring(0,3)==='sin'){
      dispatch(loadSin());
    }
    else if(viewCalculator.number.substring(0,3)==='cos'){
      dispatch(loadCos());
    }
    else if(viewCalculator.number.substring(0,3)==='tan'){
      dispatch(loadTan());
    }
    else if(viewCalculator.number.substring(0,3)==='log'){
      dispatch(loadLog());
    }
    else{
  dispatch(loadAnswer())}
} 
  return (
    <>
        <section className='bg-gray-300'>
          <div className='bg-sky-300 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10'>
            <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
              <h6>Calculator App</h6>
            </div>
            <div className='h-20'>
              <input type="text" placeholder='0'  value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans} className=' w-full h-full border border-white bg-white-900 text-gray-900 text-4xl text-right pr-5' />
            </div>
            <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
            
              <button onClick={() =>dispatch(loadClear())} className='text-gray  bg-red-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-700'>AC</button>
              <button onClick={() =>dispatch(loadBackspace())}  className='text-gray  bg-red-300 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-500'>C</button>
              <button onClick={() =>dispatch(loadButtons('/'))} className='text-gray  bg-gray-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-orange-400'>/</button>
              <button onClick={() =>dispatch(loadButtons('*'))} className='text-gray  bg-gray-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-orange-400'>*</button>
              <button onClick={() =>dispatch(loadButtons(9))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>9</button> 
              <button onClick={() =>dispatch(loadButtons(8))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>8</button>
              <button onClick={() =>dispatch(loadButtons(7))} 
              className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>7</button> 
              <button onClick={() =>dispatch(loadButtons('-'))} className='text-gray  bg-gray-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-orange-400'>-</button>
              <button onClick={() =>dispatch(loadButtons(4))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>4</button>
              <button onClick={() =>dispatch(loadButtons(5))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow underline hover:bg-sky-200'>5</button>
              <button onClick={() =>dispatch(loadButtons(6))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>6</button>
              <button onClick={() =>dispatch(loadButtons('+'))} className='text-gray  bg-gray-500 w-20 h-42 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2 hover:bg-orange-400'>+</button>
              <button onClick={() =>dispatch(loadButtons(1))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>1</button>
              <button onClick={() =>dispatch(loadButtons(2))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>2</button>
              <button onClick={() =>dispatch(loadButtons(3))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>3</button>
              <button onClick={() =>dispatch(loadButtons('.'))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>.</button>
              <button onClick={() =>dispatch(loadButtons(0))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>0</button> 
              <button onClick={handleAnswer} className='text-gray  bg-gray-500 w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2 hover:bg-gray-400'>=</button> 
              <button onClick={() =>dispatch(loadButtons('sin'))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>sin</button>
              <button onClick={() =>dispatch(loadButtons('cos'))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>cos</button>
              <button onClick={() =>dispatch(loadButtons('tan'))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>tan</button>
              <button onClick={() =>dispatch(loadButtons('log'))} className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-200'>log</button> 
              {/* <button onClick={() =>setVisible(!visible)} className='text-gray  bg-red-500 w-80 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-sky-700'>Scientific Calcy</button> */}
              {/* {visible && <Sci_fyCalcy/>} */}
            </div>
          </div>
        </section>
    </>
  )
}
