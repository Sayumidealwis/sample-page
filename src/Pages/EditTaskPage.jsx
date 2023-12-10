import React from 'react'
import './EditTaskPage.css'

const EditTaskPage = () => {
  const handlesubmit =()=>{
    alert("task detail edited");
  }
  return (
    <div className="edit-task-page">
      <h1>This is edit a task page</h1>
      <form>
        <label className="form-label">Description:</label>
        <input type="text" disabled/><br/><br/>

        <label className="form-label">Category:</label>
        <select disabled>
          <option>option 1</option>
          <option>option 2</option>
          <option selected>option 3</option>
        </select>
        <br/><br/>

        <label className="form-label">Project Regarding:</label>
        <select disabled>
          <option>option 1</option>
          <option selected>option 2</option>
        </select>
        <br/><br/>

        <label className="form-label">Requested By:</label>
        <select disabled>
          <option selected>option 1</option>
          <option>option 2</option>
        </select><br/><br/>

        <label className="form-label">Assigned To:</label>
        <select>
          <option>option 1</option>
          <option>option 2</option>
        </select><br/><br/>
        
        <label className="form-label">Status:</label>
        <select required>
          <option>option 1</option>
          <option>option 2</option>
        </select><br/><br/>
        
        <label className="form-label">Comment:</label>
        <textarea cols={30} rows={10}></textarea>
        <br/><br/>

        <button type='submit'onClick={handlesubmit()}>Save</button>
      </form>
    </div>
  )
}

export default EditTaskPage
