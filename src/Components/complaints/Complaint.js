

const Complaint = () => {
    return (
        <div>
        <div className="row justify-content-center box-height">

            <div className="col-9 align-self-center shadow-lg" >
                <div className="row justify-content-center p-2">
                    < h2 style={{ textAlign: "center", fontFamily: 'Vedana', fontWeight: 'bold' }}>Complaint Registration</h2>
                </div>
                <form className="form-inline" >
                    <div className="border border-2 p-1" >
                        <div className='row justify-content-center'>
                            <h3 className='p-2 rounded' style={{ fontFamily: 'Verdana', textAlign: "center" }}>Personal Information
                            </h3>
                        </div>

                        <div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label" >
                                    First Name :
                                </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" required /><br />
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label" >
                                    Last Name :
                                </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" required /><br />
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" required />
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Contact Number </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="number" />
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Email </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="email" />
                                </div>
                            </div>  
                            </div>
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center'>
                                <h3 className='p-2 rounded' style={{ fontFamily: 'Verdana', textAlign: "center" }}>Complaint Information
                                </h3>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Complaint type</label>
                                <div className="col-sm-8"><select className="form-control" name="day" id="day" >
                                    <option value="day" disabled selected>Type</option>
                                    <option value="Type1">Type1</option>
                                    <option value="Type2">Type2</option>

                                </select>
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Sub Complaint type</label>
                                <div className="col-sm-8"><select className="form-control" name="day" id="day">
                                    <option value="day" disabled selected>Type</option>
                                    <option value="Type1">Type1</option>
                                    <option value="Type2">Type2</option>

                                </select>
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Complaint Description </label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Specify complaint location </label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" type="text" />
                                </div>
                            </div>



                            <br />
                            <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-primary btn-lg' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} /></div>
                            <br />

                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        
        </div>

    )
}

export default Complaint;