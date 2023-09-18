"use client"
import React, { useState } from "react";

const page = () => {

  const [title, settile] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]);


  //variable e pass in submitHandler funtion
  const submitHandler = (e) => {
    //inbuild method - e.preventDefault (page reload nahi hota)
    e.preventDefault()
    

    // console.log(title)
    // console.log(desc)
    //main task it is an container where all previous task and new task will be add
    setMainTask([...mainTask, { title, desc }]);
    settile("")
    setdesc("")
    
    console.log(mainTask);
  }

  //copytask variable , deleteHandler is a function
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    //copytask variable me purane array ko copy kiya
    copytask.splice(i,1)
    setMainTask(copytask)

  }

  // t = task, i = index
  // t is object
  //key - unquie identification deta hai elements kos

  let renderTask = <h2> No Task Available </h2>



  // main task code 
  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <p className="text-lg font-medium">{t.desc}</p>
          </div>
          {/* deleteHandler function ke andar se call kara hai, direct call karte to data allready delete hojata or kuch bhi nahi display hota */}
          <button onClick={()=>{
            deleteHandler(i)
          }} 
          className="bg-red-400 text-white px-4 py-2 roundeed font-bold">Delete</button>
        </li>
      )

    })
  }

    // main task code end

  return (
    // <></> fragment used just like container.
    <>
      <div>page</div>
      <form onSubmit={submitHandler}>

        <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>TODO LIST</h1>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 '
          placeholder='Enter Task here'
          value={title}
          onChange={(e) => {
            settile(e.target.value)

          }}
        />
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 '
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">Add Task</button>


      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>



    </>
  )
}

export default page
