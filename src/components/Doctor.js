import React, { useEffect, useState } from 'react';
import DynamicTable from './DynamicTable';
import AddDoctorModal from './AddDoctorModal';
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Doctor = () => {
  const [state, setState] = useState(false);
  const [list, setList] = useState([]); 
  const [filterList, setFilterList] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [editdata, setEditdata] = useState(null); 
  const [counter, setCounter] = useState(6); 


  const doctorList = [
    {
      id: 1,
      name: "Dr. Jay",
      specialization: "Cardiology", 
      experience: "10+",
      location: "Hyderabad",
      description: "A cardiologist with 10+ years of experience in managing a wide range of heart-related conditions.", 
    },
    { 
      id: 2, 
      name: "Dr. Shirisha", 
      specialization: "Gynecologist", 
      experience: "8+",
      location: "Hyderabad",
      description: "9+ years of experience in gynecology, particularly the female reproductive system.", 
    },
    { 
      id: 3, 
      name: "Dr. Deva", 
      specialization: "Neurologist", 
      experience: "7+",
      location: "Hyderabad",
      description: "6+ years of experience in diagnosing, treating, and managing disorders of the nervous system.", 
    },
    { 
      id: 4, 
      name: "Dr. Rudhra", 
      specialization: "General Physician",
      experience: "5+",
      location: "Hyderabad", 
      description: "5+ years of experience in General Physician care and providing comprehensive care to individuals of all ages.", 
    },
    { 
      id: 5, 
      name: "Dr.Vikram", 
      specialization: "Dental Physician", 
      experience: "8+",
      location: "Hyderabad",
      description: "A Dental Physician, prevention, and treatment of diseases and conditions related to the teeth, gums, and mouth.", 
    }
  ];


  const onChangefun = (event) => {
    setSearch(event?.target?.value);
  };

 
  const column = [
    { name: "ID", cell: (list) => list.id },
    { name: "Name", cell: (v) => v.name },
    { name: "Specialization", cell: (v) => v.specialization },
    { name: "Experience", cell: (v) => v.experience },
    { name: "Location", cell: (v) => v.location },
    { name: "Description", cell: (v) => v.description },
    { name: "Action", cell: (v) => (
      <div className='d-flex gap-3'>
        <div onClick={() => handleEdit(v)}><FaUserEdit size={20} /></div>
        <div className='mx-2' onClick={() => deleteList(v.id)}><MdDeleteForever size={20} /></div>
      </div>
    )}
  ];

 
  const handleEdit = (doctordata) => {
    setEditdata(doctordata);
    setState(true);
  };

 
  const addList = (obj) => {
    if (editdata) {
      const updatedList = list.map((item) =>
        item.id === obj.id ? { ...item, ...obj } : item
      );
      setList(updatedList);
      setFilterList(updatedList);
    } else {
      obj.id = counter;
      setList([...list, obj]);
      setFilterList([...filterList, obj]);
      setCounter(counter + 1);
    }
  };


  const deleteList = (id) => {
    const filteredList = list.filter((v) => v.id !== id);
    setList(filteredList);
    setFilterList(filteredList);
  };


  useEffect(() => {
    if (search?.length >= 3) {
      const result = filterList.filter((v) => {
        return (
          v?.name?.toLowerCase().includes(search.toLowerCase()) ||
          v?.specialization?.toLowerCase().includes(search.toLowerCase())
        );
      });
      setList(result);
    } else {
      setList(filterList);
    }
  }, [search, filterList]);

  
  useEffect(() => {
    setList(doctorList);
    setFilterList(doctorList);
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='p-3'>
          <div className='d-flex flex-wrap justify-content-between px-5'>
            <div><h5>Doctor List</h5></div>
            <div><input className='form-control' placeholder='Search...' onChange={(event) => onChangefun(event)} /></div>
            <div>
              <button className='btn btn-success text-white border' onClick={() => setState(true)}>Add Doctor</button>
            </div>
          </div>
        </div>
      </div>

     
      <DynamicTable columns={column} data={list} />

   
      <AddDoctorModal show={state} onHide={() => setState(false)} addObj={addList} editdata={editdata} />
    </div>
  );
};

export default Doctor;
