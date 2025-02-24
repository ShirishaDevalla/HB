import React, { useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import Useformvalidation from './Useformvalidation';
import { Save } from '../servicesfunction/Services';
import { url } from '../servicesfunction/Url';


const AddUserModal = (props) => {
  

  const savePatient = async () => {
    data["userId"] = props?.show?.userId ? props?.show?.userId : "0"
    let body = data;
    const res = await Save(url.getsavepatient, body);
    if (res) {
      props.onHide();
      props.callback(res); 
    }
  };
  const { data, setData, handleOnChange, handlesubmit } = Useformvalidation({
    submit: savePatient,
  });

  useEffect(() => {
    if (props?.show?.userId > 0) {
      setData(props.show);
    }
  }, [props.show]);
  console.log(props.show);
  

  const returnValue = (key) => {
    return data?.[key] || "";
  };

  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>{props.show?.userId ? 'Edit Patient' : 'Add Patient'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container p-3 m-2">
          <div className="d-flex col-md-12 gap-3 mb-3">
            <div className="flex-grow-1">
              <label>Name</label>
              <input
                className="form-control p-2"
                placeholder="Name"
                value={returnValue('userName')}
                name="name"
                onChange={handleOnChange('userName')}
              />
            </div>
            <div className="flex-grow-1">
              <label>Email</label>
              <input
                className="form-control p-2"
                placeholder="Age"
                value={returnValue('email')}
                name="age"
                onChange={handleOnChange('email')}
              />
            </div>
          </div>

          <div className="d-flex gap-3 mb-3">
            <div className="flex-grow-1">
              <label>Gender</label>
              <select
                className="form-control p-2"
                placeholder="Gender"
                value={returnValue('gender')}
                name="gender"
                onChange={handleOnChange('gender')}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            
          </div>

          

          
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="w-100 d-flex justify-content-between">
          <button onClick={props.onHide} className="btn btn-info px-4 border m-2">
            Close
          </button>
          <button
            className="btn btn-secondary px-4 border m-2"
            onClick={handlesubmit}
          >
            Save
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;
