// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Addcss/Card.css'
import '../Addcss/Background.css';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate();
    const registeredLoggedin = (e) => {
        e.preventDefault();
        navigate('/hodhomepage');
    }
    return (
        <div className="row justify-content-center box-height my-4">
             <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
        <div className="row justify-content-center p-2 ">
           
            <br></br><br></br>
            <div className="col-9 align-self-center shadow-lg ">

                <div className="row justify-content-center p-2">
                    <h2 style={{ textAlign: "center", fontFamily: 'Vedana', fontWeight: 'bold' }}> Login </h2>
                    <br></br>
                    <form className="form-inline" >
                        <div className='form-group my-4' >
                            <label  className="col-sm-3 col-form-label">Enter Name : </label>
                            <input type="text" id="n1" name="name" required></input>
                        </div>

                        <div className='form-group my-4'>
                            <label  className="col-sm-3 col-form-label">Enter Password : </label>
                            <input type="password" id="p1" name="pwd" required></input>
                        </div>

                        <div className='form-group my-4'>
                            <label className="col-sm-3 col-form-label">
                                <input className="form-check-input" type='checkbox' id="p1" name="pwd" required></input>
                                &nbsp;Remember me </label>

                        </div>

                        Don't have an account? Create an account <a href="/registration">here</a>
                        <br></br>
                        <div className='form-group'>
                        <input type="submit" onClick={(e) => registeredLoggedin(e)} className="btn btn-primary"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
       
        </div>
    );
}

export default Login;