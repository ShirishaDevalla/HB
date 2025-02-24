import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const AddDoctorModal = ({ show, onHide, addObj, editdata }) => {
  const [data, setData] = useState({});

  const submit = () => {
    addObj(data);
    onHide(); 
  };

 
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };


  useEffect(() => {
    if (editdata) {
      setData(editdata);
    } else {
      setData({});
    }
  }, [editdata, show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{editdata ? 'Edit Doctor' : 'Add Doctor'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container p-3 m-2'>
          <div className='row d-flex col-md-12 gap-3 mb-3'>
            <div className="flex-grow-1">
              <label>Name</label>
              <input
                className="form-control p-2"
                placeholder="Name"
                value={data?.name || ''}
                name="name"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-grow-1">
              <label>Specialization</label>
              <input
                className="form-control p-2"
                placeholder="Specialization"
                value={data?.specialization || ''}
                name="specialization"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-grow-1">
              <label>Experience</label>
              <input
                className="form-control p-2"
                placeholder="Experience"
                value={data?.experience || ''}
                name="experience"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-grow-1">
              <label>Location</label>
              <input
                className="form-control p-2"
                placeholder="Location"
                value={data?.location || ''}
                name="location"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-grow-1">
              <label>Description</label>
              <input
                className="form-control p-2"
                placeholder="Description"
                value={data?.description || ''}
                name="description"
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex justify-content-between">
          <button onClick={onHide} className="btn px-4 border m-2">Close</button>
          <button className="btn px-4 border m-2" onClick={submit}>Save</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDoctorModal;
