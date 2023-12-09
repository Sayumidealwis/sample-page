import React from "react";

const TaskDetails = ({ location}) => {
  const rowData = location.state.rowData;

  return (
    <div>
      <h2>Task Details</h2>
      <p>Task ID: {rowData.id}</p>
      <p>Category: {rowData.category}</p>
      <p>Requested By: {rowData.requestedBy}</p>
    </div>
  );
};

export default TaskDetails;
