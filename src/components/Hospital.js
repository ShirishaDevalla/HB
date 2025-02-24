import React, { useEffect, useState } from 'react';
import DynamicTable from './DynamicTable';
import { getAllHospitalList } from '../servicesfunction/Services';
import { url } from '../servicesfunction/Url';
import AddHospitalModal from './AddHospitalModal';
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Hospital = () => {
  const [state, setState] = useState([]);
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState(null); 

  const getHospital = async () => {
    const body = { id: 0 };
    const res = await getAllHospitalList(url.gethospital, body);
    setState(res);
    // console.log(res);
    
 };

  const columns = [
    { name: "hospitalId", selector: (v) => v.hospitalId },
    { name: "hospitalName", selector: (v) => v.hospitalName },
    { name: "shortName", selector: (v) => v.shortName },
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
    getHospital();
  }, [update]); 

  return (
    <div>
      <div className='container'>
        <div className='p-3'>
          <div className='d-flex flex-wrap justify-content-between  px-5'>
            <div><h5>Hospital List</h5></div>
            <div>
              <button className='btn btn-success text-white border'  onClick={() => setModal(true)}>Add List</button>
            </div>
          </div>
        </div>
      </div>

     
      {state &&<DynamicTable columns={columns} data={state} />}
      {modal &&<AddHospitalModal show={modal} onHide={() => setModal(false)} callback={setUpdate}/>}
    </div>
  );
};

export default Hospital;
