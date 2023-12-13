import Header from '../Components/Header'
import DataTable from 'react-data-table-component'
import './HistoryTask.css'
import React, { useState } from 'react'

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
  },
]

const data = [
  {
    id: 100,
    status: 'Active',
    addedDate: '2023-02-26',
    addedBy: 'emp01',
    comment: 'Active status',
  },
  {
    id: 100,
    status: 'On Hold',
    addedDate: '2023-02-27',
    addedBy: 'emp01',
    comment: 'Onhold status',
  },
  {
    id: 100,
    status: 'In Progress',
    addedDate: '2023-03-05',
    addedBy: 'emp02',
    comment: 'In progress status',
  },
  {
    id: 100,
    status: 'On Hold',
    addedDate: '2023-03-08',
    addedBy: 'emp03',
    comment: 'On Hold status',
  },
  {
    id: 100,
    status: 'Done',
    addedDate: '2023-03-10',
    addedBy: 'emp03',
    comment: 'Done status',
  },
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
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')

  const [errors, setErrors] = useState({
    Status: '',
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      Status: '',
    }

    if (!status) {
      newErrors.Status = 'Please select the status'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      window.alert('Validation success...')
    } else {
      window.alert('Validation Failed. Fill all the required fields...')
    }
  }

  const handleClear = (e) => {
    e.preventDefault()

    setStatus('')
    setComment('')

    setErrors({
      Status: '',
    })
  }
  return (
    <div>
      <Header currentPage="Task History" />
      <div className="container_history">
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

        <div className="addstatus">
          <form>
            <label className="form-label">Task:</label>
            <select disabled>
              <option>option 1</option>
              <option>option 2</option>
              <option selected>100</option>
            </select>
            <br />
            <br />

            <label className="form-label">
              Status
              <span style={{ color: 'red', fontWeight: 'bold' }}> * </span>:
            </label>
            <select
              name="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
                setErrors({ ...errors, Status: '' })
              }}
              required
            >
              <option disabled hidden value="">
                Select an option
              </option>
              <option>Active</option>
              <option>On Hold</option>
              <option>Waiting For</option>
              <option>Invalid</option>
              <option>Rejected</option>
              <option>Done</option>
            </select>
            {errors.Status && <p className="error">{errors.Status}</p>}
            <br />
            <br />

            <label className="form-label">Comment:</label>
            <textarea
              name="description"
              rows={10}
              cols={30}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
              }}
            ></textarea>
            <br />
            <br />
            <button className="btn" type="button" onClick={handleClear}>
              Clear
            </button>
            <button className="btn" type="submit" onClick={handleSubmit}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HistoryTaskPage
