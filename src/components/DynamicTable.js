import React from 'react';
import ReactTable from 'react-data-table-component';

const DynamicTable = ({ columns, data }) => {
  const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
                fontSize: "12px"
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                fontSize: "15px",
                background: "#9370DB"
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };
  return (
    <div>
      <ReactTable
        columns={columns}  
        data={data}        
        className="border rounded m-2"
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default DynamicTable;
