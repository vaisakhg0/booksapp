import React from 'react'
import Header from './Header'

const Viewbooks = () => {
    var Booklist={"title":"wings of fire","price":"200","author":"apj"
    }
  return (
    <div>
        <Header/>
        <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">{Booklist.title}</label>
                    <label for="" className="form-label">{Booklist.price}</label>
    </div></div></div>
    </div></div></div>

  )
}

export default Viewbooks