import React from 'react'


const registerMini = () => {
  return (
    <>
    <hr/>
    <div className='m-auto w-full p-4 mt-5'>
        <h1 className='text-2xl font-bold text-center p-1 text-slate-900'>관심고객등록</h1>
        <form className='m-auto w-full text-center flex flex-col items-center'>
            <input className='border shadow-lg p-3 my-3 lg:min-w-[30%] min-w-full' type="text" placeholder='이름' />
            <input className='border shadow-lg p-3 lg:min-w-[30%] min-w-full' type="text" placeholder='연락처' />
            <div>
                <input type='checkbox' id="scales" name="scales" checked className='my-5'></input>
                <label for="scales">개인정보 취급방침에 동의합니다.</label>
            </div>
            <button className='border shadow-lg p-3 my-3 font-bold bg-slate-900 text-white m-0 lg:min-w-[30%] min-w-full'>관심고객 등록</button>
        </form>
    </div>
    </>
  )
}

export default registerMini