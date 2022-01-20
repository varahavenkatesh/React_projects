import React from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup';

const YupForm = () => {

    return (
      <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          email:'',
          country:'',
          state:'',
          age:'',
          zip:''
        }} 
       
        validationSchema={ Yup.object({
            firstname:Yup.string().required('Sorry First Name is Required')
            .min(5,'Minimum Length Shoulg be 5 chars')
            .max(10,'Sorry Length cant be more than 10 chars'),
            lastname:Yup.string().required('Sorry Last Name is Required'),
             email:Yup.string().required('Email is Required Field' ).
             email('Needs To Be An Email') ,
             age:Yup.number().min(18).max(80).required('Áge is Required Field')    

        })}

        onSubmit={( values )=>{
          console.log("TEST");
          console.log(values)
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3">Personal information</h4>
    
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname">First name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstname" 
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.firstname && touched.firstname ?
                  <span>{ errors.firstname }</span>
                :null}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <input 
                  type="text"
                  className="form-control"
                  id="lastname" 
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}  
                  onBlur={handleBlur}
                />
                { errors.lastname && touched.lastname ?
                  <span>{ errors.lastname }</span>
                :null}
              </div>
            </div>
    

            
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}  
                onBlur={handleBlur}
                />
                 { errors.email && touched.email ?
                  <span>{ errors.email }</span>
                :null}
            </div>
            <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="Age">Age</label>
              <input 
                type="age" 
                className="form-control" 
                id="age" 
                name="age" 
                placeholder="123"
                value={values.age}
                onChange={handleChange}  
                onBlur={handleBlur}
                />
                 { errors.age && touched.age ?
                  <span>{ errors.age }</span>
                :null}
            </div>
      </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select 
                  className="custom-select d-block w-100" 
                  id="country" 
                  name="country"
                  value={values.country}
                  onChange={handleChange}  
                >
                  <option value="">Choose...</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="NL">Netherlands</option>
                </select>
              
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select 
                  className="custom-select d-block w-100" 
                  id="state" 
                  name="state"
                  value={values.state}
                  onChange={handleChange}  
                >
                  <option value="">Choose...</option>
                  <option value="california">California</option>
                  <option value="toronto">Toronto</option>
                  <option value="utrech">Utrech</option>
                </select>
              
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="zip" 
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}  
                />
              </div>
            </div>
    
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
          </div>
        </div>
        )}
      </Formik>


    
    );

}


export default YupForm;