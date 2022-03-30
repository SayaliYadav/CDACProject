

const NewPayment = () => {
    return (
        <div>
        <div className="row justify-content-center box-height my-4">

            <div className="col-9 align-self-center shadow-lg" >
                <div className="row justify-content-center p-2">
                    < h2 style={{ textAlign: "center", fontFamily: 'Vedana', fontWeight: 'bold' }}>Make payment </h2>
                </div>
                <form className="form-inline" >
                    <div className="border border-2 p-1" >
                       

                        <div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label" >
                                    Enter consumer No :
                                </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" required /><br />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Depatment</label>
                                <div className="col-sm-8"><select className="form-control" name="day" id="day" >
                                    <option value="day" disabled selected>Select Department</option>
                                    <option value="Type1">water</option>
                                    <option value="Type2">property</option>

                                </select>
                                </div>
                            </div>

                            <center>
                            <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-light' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} /> <input type="submit" value="Clear" className='btn btn-light' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} /></div>
                            &emsp;&emsp;
                           
                            <div className='wraper'>   </div>
                            </center>

                            <center><p>OR</p></center>
                         
                            <center><div className='wraper'>   <input type="submit" value="Go With Current Consumer" className='btn btn-primary' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} /></div></center>
                            </div>


                            
                       
                    </div>
                    
                </form>
            </div>
        </div>
        
        </div>

    )
}

export default NewPayment;