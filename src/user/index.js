import React, { Fragment } from "react"
import enhancer from "./enhancer"

function User(props) {
    const {
        formData,
        handleInputChange,
        userList,
        formattedDate,
        handleSubmit
    } = props

    return (
        <Fragment>
            <div style={{ padding: '2% 10%' }}>
                <form>
                    <fieldset>
                        <legend>User Form</legend>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Types of visit</label>
                            <select className="form-control" id="visit-type" name="visitType" value={formData.visitType} onChange={handleInputChange}>
                                <option hidden>Select</option>
                                <option>Meeting</option>
                                <option>Delivery</option>
                                <option>Personal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Person to visit</label>
                            <input type="text" className="form-control" name="personName" value={formData.personName} onChange={handleInputChange} placeholder="Enter person name" />
                        </div>
                        <div className="form-group">
                            <label>Date of entry</label>
                            <input type="text" className="form-control" name="entryDate" defaultValue={formattedDate}  placeholder="MM/DD/YYYY" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Time of entry</label>
                            <input type="text" className="form-control" name="entryTime" value={formData.entryTime} onChange={handleInputChange} placeholder="09:00" />
                        </div>
                        <div className="form-group">
                            <label>Time of exit</label>
                            <input type="text" className="form-control" name="exitTime" value={formData.exitTime} onChange={handleInputChange} placeholder="13:00" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </fieldset>
                </form>
                <legend className="mt-3">User logs</legend>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Person name</th>
                                <th scope="col">Visit type</th>
                                <th scope="col">Entry Date</th>
                                <th scope="col">Entry Time</th>
                                <th scope="col">Exit time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList && userList.map((user, i) => (
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.personName}</td>
                                    <td>{user.visitType}</td>
                                    <td>{user.entryDate}</td>
                                    <td>{user.entryTime}</td>
                                    <td>{user.exitTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}
export default enhancer(User)
