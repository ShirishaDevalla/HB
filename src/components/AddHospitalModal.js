import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { getSaveHospital } from '../servicesfunction/Services';
import { url } from '../servicesfunction/Url';
import Useformvalidation from './Useformvalidation';

const AddHospitalModal = (props) => {
    
   const saveHospital = async()=>{
    data["hospitalId"] = props?.show?.hospitalId ? props?.show?.hospitalId : "0"
    let body = data;
    const res = await getSaveHospital(url.getsavehospital, body)
    if(res){
        props.onHide();
        props.callback(res)
    }
   }
   const{ data, setData, handleOnChange, handlesubmit } = Useformvalidation({
        submit: saveHospital,
   })
   useEffect(()=>{
    if(props?.show?.hospitalId){
         setData(props.show)
    }
   
   },[props.show])


  const returnValue = (key) => {
    return data?.[key] || "";
  };
  
  return (
    <Modal {...props}>
         <Modal.Header>
                <Modal.Title>{props.show?.hospitalId ? 'Edit Hospital' : 'Add Hospital'}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div className='container p-3 m-2'>
                <div className='row d-flex col-md-12 gap-3 mb-3'>
                       <div className="flex-grow-1">
                       <label>hospitalId</label>
              <input
                className="form-control p-2"
                placeholder="hospitalId"
                value={returnValue('hospitalId')}
                name="hospitalId"
                onChange={handleOnChange('hospitalId')}
              />
                        </div>
                        <div className="flex-grow-1">
                        <label>hospitalName</label>
                        <input
                className="form-control p-2"
                placeholder="hospitalName"
                value={returnValue('hospitalName')}
                name="hospitalName"
                onChange={handleOnChange('hospitalName')}
              />
                        </div>
                        <div className="flex-grow-1">
                        <label>shortName</label>
                        <input
                className="form-control p-2"
                placeholder="shortName"
                value={returnValue('shortName')}
                name="shortName"
                onChange={handleOnChange('shortName')}
              />
                        </div>


                </div>

            </div>

         </Modal.Body>
         <Modal.Footer>
                <div className="w-100 d-flex justify-content-between">
                    <button
                        onClick={props.onHide}
                        className="btn  px-4 border m-2"
                    >
                        Close
                    </button>
                    <button
                        className="btn  px-4 border m-2"
                        onClick={handlesubmit}
                    >
                        Save
                    </button>
                </div>
            </Modal.Footer>


    </Modal>
  )
}

export default AddHospitalModal