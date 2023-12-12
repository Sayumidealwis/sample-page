import React from 'react'
import Header from '../Components/Header'
import DataTable from 'react-data-table-component'
import './HistoryTask.css'

const column = [
    {
      name: 'Task',
      selector: (row) => row.id,
      //sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      //sortable: true,
    },
    {
      name: 'Added Date',
      selector: (row) => row.addedDate,
      //sortable: true,
    },
    {
      name: 'Added By',
      selector: (row) => row.addedBy,
    },
    {
        name: 'Comment',
        selector: (row) => row.comment,
      }
  ]

  const data = [
    {
        id: 100,
        status: 'Active',
        addedDate: '2023-02-26',
        addedBy: 'emp01',
        comment: 'Active status'
    },
    {
        id: 100,
        status: 'Active',
        addedDate: '2023-02-26',
        addedBy: 'emp01',
        comment: 'Active status'
    },
    {
        id: 100,
        status: 'On hold',
        addedDate: '2023-02-26',
        addedBy: 'emp01',
        comment: 'on hold status'
    },
    {
        id: 100,
        status: 'Active',
        addedDate: '2023-02-26',
        addedBy: 'emp01',
        comment: 'Active status'
    },
    {
            id: 100,
        status: 'on hold',
        addedDate: '2023-02-26',
        addedBy: 'emp01',
        comment: 'on hold status'
    }
      
]

const customStyles = {
    headCells: {
      style: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      },
    },
    cells: {
      style: {
        fontSize: '14px',
      },
    },
  }

const HistoryTaskPage = () => {
    const handlesubmit =(e)=>{
        e.preventDefault()
        alert("Task data is added");
    }
  return (
    <div >
      <Header currentPage="Task History"/>
      <div className='container_history'>
        <div className="dataaTable">
          <DataTable 
            columns={column}
            data={data}
            pagination
            highlightOnHover
            pointerOnHover
            customStyles={customStyles}
          />
    
        </div>

        <div className='addstatus'>
        <form>
            

            <label className="form-label">Task:</label>
            <select disabled>
              <option>option 1</option>
              <option>option 2</option>
              <option selected>100</option>
            </select>
            <br/><br/>

            <label className="form-label">Status:</label>
            <select >
              <option selected>Active</option>
              <option >On hold</option>
            </select>
            <br/><br/>

            <label className="form-label">Comment:</label>
            <textarea cols={30} rows={10} required></textarea>
            <br/><br/>

            <button className="subbtn" type='submit'onClick={handlesubmit}>Save</button>
        </form>
        </div> 
      </div>
    </div>
  )
}

export default HistoryTaskPage
