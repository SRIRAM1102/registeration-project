import "./details.css";

export function Details({ editUser, deleteUser, data, handleaddEvent }) {
  return (
    <>
      <h6>Registeration</h6>
      <form onSubmit={handleaddEvent}>
        <div>
          <label htmlFor="Fullname"> Fullname: </label>
          <input
            type="text"
            name="Fullname" 
            id="Fullname"
            onChange={(event) => console.log(event)}
            required
          />
          <br />
          <br />
          <label htmlFor="Mobile"> Mobile: </label>
          <input
            type="tel"
            name="Mobile"
            placeholder="8888888888"
            maxLength="10"
            title="Ten digits code"
            required
            className="left"
          />

          <br />
          <br />
          <label htmlFor="JobType">Job Type: </label>
          <select name="JobType" id="JobType" required>
            <option selected disabled>
              Select an option
            </option>
            <option value="Ft">Ft</option>
            <option value="PT">PT</option>
            <option value="Consultant">Consultant</option>
          </select>

          <br />
          <br />
          <label htmlFor="Location"> Location: </label>

          <select name="Location" id="Location" required>
            <option selected disabled>
              Select an option
            </option>
            <option value="Chennai">Chennai</option>
            <option value="Bangaloe">Bangaloe</option>
            <option value="Pune">Pune</option>
          </select>

          <br />
          <br />
        </div>
        <div>
          <label htmlFor="ProfilePic"> Profile Pic: </label>

          <input
            type="file"
            accept="image/*"
            name="ProfilePic"
            id="ProfilePic"
            required
          ></input>
          <br />
          <br />
          <label htmlFor="EmailId">EmailId: </label>

          <input type="email" name="EmailId" id="EmailId" required />
          <br />
          <br />
          <label htmlFor="DOB">DOB: </label>

          <input
            type="date"
            name="DOB"
            id="DOB"
            required
            className="leftside"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Job Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.fullname}</td>
                <td>{user.emailId}</td>
                <td>{user.mobile}</td>
                <td>{user.dob}</td>
                <td>{user.jobtype}</td>
                <td>
                  <button
                    onClick={() => editUser(user._id)}
                    className="editsbtn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="deletebtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody> 
      </table>
    </>
  );
}
