import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo() {
  const [Activity, setActivity] = useState("")
  const [list, setlist] = useState([])
  function AddActivity() {
    setlist((list) => {
      const updatedata = [...list, Activity]
      console.log(updatedata)
      setActivity('')
      return updatedata
    })
  }
  function removedata(i){
    const deletedata=list.filter((elem,id)=>{
      return i!==id
    })
    setlist(deletedata)
  }
  function removeAll(){
    setlist([])
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-6 todo'>
          <h2>TODO LIST</h2>
          <div className='todo-input'>
            <input type="text" className='form-control' value={Activity} placeholder='Add Item' onChange={(e) => setActivity(e.target.value)} />
            <button className='btn btn-primary' onClick={AddActivity}>Add</button>
          </div>
          <div className='list'>
            <h3>Here is Your List:-</h3>
          </div>
          {
            list!==[] && list.map((data,i)=>{
              return(
                <>
                  <p key={i}>
                    <div style={{display:'flex',textAlign:'center'}}>
                      <div className='form-control'>{data}</div>
                      <button className='btn btn-primary' onClick={()=>removedata(i)}>Delete</button>
                    </div>
                    
                  </p>
                </>
              )
            })
          }
          {
            list.length>=1 &&
            <button className='btn btn-primary' onClick={removeAll}>Remove All</button>
          }

        </div>
      </div>
    </div>
  )
}
