import React from 'react'
import Header from './Header'

const Addbooks = () => {
  return (
    <div>
        <Header/>
        <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12 col-xxl-12">
                
                        <label for="" className="form-label">BookTitle</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Author</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Price</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">SUBMIT</button>
                    

                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default Addbooks