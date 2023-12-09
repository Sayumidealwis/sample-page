
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TaskPage from './Pages/TaskPage'
import Sidebar from './Components/Sidebar'
import EditTaskPage from './Pages/EditTaskPage'
import AddTaskPage from './Pages/AddTaskPage'
import ViewTaskPage from './Pages/ViewTaskPage'
import HistoryTaskPage from './Pages/HistoryTask'


function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasklist" element={<TaskPage />} />
            <Route path="/taskview" element={<ViewTaskPage />} />
            <Route path="/taskadd" element={<AddTaskPage />} />
            <Route path="/taskedit" element={<EditTaskPage />} />
            <Route path="/taskhistory" element={<HistoryTaskPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>





  )
}

export default App
