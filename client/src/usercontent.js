import "./usercontent.css";

export function Usercontent({ setshow, edit, handleeditEvent }) {
  return (
    <div className="modal" onClick={() => setshow(false)}>
      <div
        className="modalcontent"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modalheaders">
          <button onClick={() => setshow(false)} className="crossmark">
            ✖
          </button>
        </div>
        <div className="modalarea">
          <form onSubmit={handleeditEvent} className="modalform">
            <div>
              <label htmlFor="Fullname" /> Fullname: <br />
              <input
                type="text"
                name="Fullname"
                id="Fullname"
                Value={edit[0].fullname}
                required
              />
              <br />
              <br /> 
            </div>
            <div>
              <label htmlFor="EmailId" />
              Email:
              <br />
              <input
                type="email"
                name="EmailId"
                id="EmailId"
                Value={edit[0].emailId}
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="Mobile" /> Mobile: <br />
              <input
                type="tel"
                name="Mobile"
                placeholder="8888888888"
                maxLength="10"
                title="Ten digits code"
                Value={edit[0].mobile}
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="DOB" />
              DOB:
              <br />
              <input
                type="date"
                name="DOB"
                id="DOB"
                Value={edit[0].dob}
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="JobType" />
              Job Type:
              <br />
              <input
                type="text"
                name="JobType"
                id="JobType"
                Value={edit[0].jobtype}
                required
              />
              <br />
              <br />
            </div>
            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
