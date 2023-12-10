import React, { useState } from 'react'
import './AddTaskPage.css'

const AddTaskPage = () => {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [addedby, setAddedBy] = useState('')
  const [addeddate, setAddedDate] = useState('')
  const [requestedby, setRequestedBy] = useState('')
  const [requesteddate, setRequestedDate] = useState('')
  const [project, setProject] = useState('')
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')

  return (
    <div className="addtaskpage_container">
      <h1>Add a new CIA task</h1>

      <tabel>
        <div className="addtaskpage_details">
          <tr>
            <td>Description :</td>
            <td>
              <textarea
                name="description"
                rows={10}
                cols={80}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td> Catergory :</td>
            <td>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="complaint">Complaint</option>
                <option value="inquiry">Inquiry</option>
                <option value="activity">Activity</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>AddedBy :</td>
            <td>
              <select
                name="addedby"
                value={addedby}
                onChange={(e) => setAddedBy(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="addedby_1">Added By 1</option>
                <option value="addedby_2">Added By 2</option>
                <option value="addedby_3">Added By 3</option>
                <option value="addedby_4">Added By 4</option>
                <option value="addedby_5">Added By 5</option>
                <option value="addedby_6">Added By 6</option>
                <option value="addedby_7">Added By 7</option>
                <option value="addedby_8">Added By 8</option>
                <option value="addedby_9">Added By 9</option>
                <option value="addedby_10">Added By 10</option>
                <option value="addedby_11">Added By 11</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>AddedDate :</td>
            <td>
              <select
                name="addeddate"
                value={addeddate}
                onChange={(e) => setAddedDate(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="addeddate_1">Added Date 1</option>
                <option value="addeddate_2">Added Date 2</option>
                <option value="addeddate_3">Added Date 3</option>
                <option value="addeddate_4">Added Date 4</option>
                <option value="addeddate_5">Added Date 5</option>
                <option value="addeddate_6">Added Date 6</option>
                <option value="addeddate_7">Added Date 7</option>
                <option value="addeddate_8">Added Date 8</option>
                <option value="addeddate_9">Added Date 9</option>
                <option value="addeddate_10">Added Date 10</option>
                <option value="addeddate_11">Added Date 11</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Requested By :</td>
            <td>
              <select
                name="requestedby"
                value={requestedby}
                onChange={(e) => setRequestedBy(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="requestedby_1">Requested By 1</option>
                <option value="requestedby_2">Requested By 2</option>
                <option value="requestedby_3">Requested By 3</option>
                <option value="requestedby_4">Requested By 4</option>
                <option value="requestedby_5">Requested By 5</option>
                <option value="requestedby_6">Requested By 6</option>
                <option value="requestedby_7">Requested By 7</option>
                <option value="requestedby_8">Requested By 8</option>
                <option value="requestedby_9">Requested By 9</option>
                <option value="requestedby_10">Requested By 10</option>
                <option value="requestedby_11">Requested By 11</option>
              </select>
            </td>
            <td>
              <button>Add guest</button>
            </td>
          </tr>
          <tr>
            <td>Requested Date :</td>
            <td>
              <select
                name="requesteddate"
                value={requesteddate}
                onChange={(e) => setRequestedDate(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="requesteddate_1">Requested Date 1</option>
                <option value="requesteddate_2">Requested Date 2</option>
                <option value="requesteddate_3">Requested Date 3</option>
                <option value="requesteddate_4">Requested Date 4</option>
                <option value="requesteddate_5">Requested Date 5</option>
                <option value="requesteddate_6">Requested Date 6</option>
                <option value="requesteddate_7">Requested Date 7</option>
                <option value="requesteddate_8">Requested Date 8</option>
                <option value="requesteddate_9">Requested Date 9</option>
                <option value="requesteddate_10">Requested Date 10</option>
                <option value="requesteddate_11">Requested Date 11</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Project Regarding :</td>
            <td>
              <select
                name="projectregarding"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="project_1">Project 1</option>
                <option value="project_2">Project 2</option>
                <option value="project_3">Project 3</option>
                <option value="project_4">Project 4</option>
                <option value="project_5">Project 5</option>
                <option value="project_6">Project 6</option>
                <option value="project_7">Project 7</option>
                <option value="project_8">Project 8</option>
                <option value="project_9">Project 9</option>
                <option value="project_10">Project 10</option>
                <option value="project_11">Project 11</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Status :</td>
            <td>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option disabled selected value="">
                  Choose a value
                </option>
                <option value="active">Active</option>
                <option value="onhold">On Hold</option>
                <option value="waitingfor">Waiting For</option>
                <option value="invalid">Invaid</option>
                <option value="rejected">Rejected</option>
                <option value="done">Done</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Comment :</td>
            <td>
              <textarea
                name="description"
                rows={10}
                cols={80}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <button>Save</button>
              <button>Cancel</button>
            </td>
          </tr>
        </div>
      </tabel>
    </div>
  )
}

export default AddTaskPage
