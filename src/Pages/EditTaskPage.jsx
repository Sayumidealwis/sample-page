import React from 'react'

const EditTaskPage = () => {
  return (
    <div>
      <h1>This is edit a task page</h1>
      <form>
        Description :<input type="text"/><br/><br/>
        Category  :
        <select>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </select>
        <br/><br/>
        Project Regarding :
        <select>
          <option>option 1</option>
          <option>option 2</option>
        </select>
        <br/><br/>
        Requested By :
        <select>
          <option>option 1</option>
          <option>option 2</option>
        </select><br/><br/>
        Assigned To :
        <select>
          <option>option 1</option>
          <option>option 2</option>
        </select><br/><br/>
        Status :<select>
          <option>option 1</option>
          <option>option 2</option>
        </select><br/><br/>
        Comment : <textarea cols={10} rows={10}></textarea>
      </form>
    </div>
  )
}

export default EditTaskPage
