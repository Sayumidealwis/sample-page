import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'

const ViewTaskPage = () => {
  const { taskid } = useParams()

  return (
    <div>
      <Header currentPage="View Task" />
      <p style={{ textAlign: 'center', fontSize: '25px' }}>
        View Task Page of Task ID {taskid}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn" type="button">
          View History
        </button>
        <button className="btn" type="button">
          Edit Task
        </button>
      </div>
    </div>
  )
}

export default ViewTaskPage
