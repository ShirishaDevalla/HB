import React from 'react';
import CardiologyDoctor from '../images/image1.png';
import Gynecologist from '../images/image2.png';
import Neurologist from '../images/image3.png';
import GeneralPhysician from '../images/image4.png';
import Dentist from '../images/image5.png';

const Speciality = () => {
  const specialitiesList = [
    {
      image: CardiologyDoctor,
      name: 'Cardiology',
      description: "A cardiologist with 10+ years of experience in managing a wide range of heart-related conditions.",
    },
    {
      image: Gynecologist,
      name: 'Gynecologist',
      description: "9+ years of experience in gynecology, particularly the female reproductive system.",
    },
    {
      image: Neurologist,
      name: 'Neurology',
      description: "6+ years of experience in diagnosing, treating, and managing disorders of the nervous system.", 
    },
    {
      image: GeneralPhysician,
      name: 'General Physician',
      description: "5+ years of experience in General Physician care and providing comprehensive care to individuals of all ages.",
    },
    {
      image: Dentist,
      name: 'Dental Physician',
      description: "A Dental Physician, prevention, and treatment of diseases and conditions related to the teeth, gums, and mouth.",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row g-5 p-2 m-2" style={{ height: 400 }}>
          {specialitiesList.map((speciality, index) => (
            <div key={index} className="col-md-4">
              <div className="card rounded shadow-sm custom-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center mb-3">
                    <img
                      src={speciality.image}
                      className="img-fluid"
                      style={{ height: '80px', width: 'auto' }}
                      alt={speciality.name}
                    />
                  </div>
                  <h5 className="card-title text-center">{speciality.name}</h5>
                  <p className="card-text text-center">{speciality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speciality;
