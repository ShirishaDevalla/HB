import React, { useEffect, useState } from 'react';
import DynamicTable from './DynamicTable';
import { getAllList, notify } from '../servicesfunction/Services';
import { url } from '../servicesfunction/Url';
import AddUserModal from './AddUserModal';
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer } from 'react-toastify';

const Users = () => {
  const [state, setState] = useState([]);
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(null);

  const getAllPatient = async () => {
    const body = { id: 0 };
    const res = await getAllList(url.getallpatient, body);
    setState(res);
    // if (res.length > 0) {
    //   notify(true, "Data fetched successfully!");
    // } else {
    //   notify(false, "No data found.");
    // }
    // console.log(res)
  };


  const columns = [
    { name: "UserId", selector: (v) => v.userId },
    { name: "Name", selector: (v) => v.firstName },
    { name: "Email", selector: (v) => v.email },
    { name: "Gender", selector: (v) => v.gender },
    {
      name: "Action",
      selector: (v) => (
       <div className='d-flex flex-wrap gap-3'>
         <div className="" onClick={() => setModal(v)}><FaUserEdit size={20} /></div>
         <div className="" onClick={() => setModal(v.Id)}><MdDeleteForever  size={20} /></div>
       </div>
      ),
    },
  ];

  useEffect(() => {
    getAllPatient();
    // if(update !== null){
    //   notify(true, "login successfull")
    // }
  
  }, [update]);

  return (
    <div>
       <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
      <div className="container">
        <div className="p-3">
          <div className="d-flex flex-wrap justify-content-between px-5">
            <div>
              <h5>Patient List</h5>
            </div>

            <div>
              <button
                className="btn btn-success text-white border"
                onClick={() => setModal(true)}
              >
                Add List
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-5 d-flex flex-wrap'>

      </div>

      {state && <DynamicTable columns={columns} data={state} />}

      {modal &&  <AddUserModal show={modal} onHide={() => setModal(false)} callback={setUpdate}/>}
    </div>
  );
};

export default Users;
