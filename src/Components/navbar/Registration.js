import '../Addcss/Registration.css'
import NavigationBar from './NavigationBar';


const Registration = () => {
    return (
        <div className="row justify-content-center ">

        <div className="row justify-content-center p-2 box-height"> 
            {/* <NavigationBar></NavigationBar> */}
            <br></br>
            <div  className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                <div className="row justify-content-center p-2">
                   
                                <h2 style={{ textAlign: "center", fontFamily: 'Vedana', fontWeight: 'bold' }}>Create an account</h2>

                                <form className="form-inline">

                                    <div className='form-group my-4' >
                                        <label  className="col-sm-3 col-form-label">Your Name</label>
                                        <input type="text" id="name" className="form-control form-control-lg" />

                                    </div>

                                    <div className='form-group my-4' >
                                        <label  className="col-sm-3 col-form-label">Your Email</label>
                                        <input type="email" id="email" className="form-control form-control-lg" />

                                    </div>

                                    <div className='form-group my-4' >
                                        <label  className="col-sm-3 col-form-label">Password</label>
                                        <input type="password" id="password" className="form-control form-control-lg" />

                                    </div>

                                    <div className='form-group my-4' >
                                        <label  className="col-sm-3 col-form-label">Confirm Password</label>
                                        <input type="password" id="confPassword" className="form-control form-control-lg" />

                                    </div>


                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success">Register</button>
                                    </div>

                                    <p className="text-center mt-5 ">Have already an account? <a href="/login" className="fw-bold">Login here</a></p>

                                </form>

                            
                </div>
            </div>
        </div>
        
        </div>


    )
}

export default Registration;