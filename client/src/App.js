import "./App.css";
import { Details } from "./details";
import { useState } from "react";
import { Usercontent } from "./usercontent";

import { useEffect } from "react";

function App() {
  let [show, setshow] = useState(false);
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState([]);

  function getData() {
    fetch("https://regismern-app.herokuapp.com/getdata")
      .then((data) => data.json())

      .then((user) => setdata(user));
  }

  function deleteUser(id) {
    fetch(`https://regismern-app.herokuapp.com/deldata/${id}`, {
      method: "DELETE",
    });
    alert("deleted");
    getData();
  }

  function handleeditEvent(e) {
    e.preventDefault();

    fetch("https://regismern-app.herokuapp.com/editdata", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: edit[0]._id,
        fullname: e.target[0].value,
        emailId: e.target[1].value,
        mobile: e.target[2].value,
        dob: e.target[3].value,
        jobtype: e.target[4].value,
      }),
    });

    setshow(false);
    alert("edited");
    getData();
  }

  function editUser(id) {
    let editdata = data.filter((data) => data._id == id);
    setedit(editdata);

    setshow(!show);
  }

  function handleaddEvent(e) {
    e.preventDefault();

    fetch("https://regismern-app.herokuapp.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: e.target[0].value,
        mobile: e.target[1].value,
        jobtype: e.target[2].value,
        location: e.target[3].value,
        avatar: e.target[4].value,
        emailId: e.target[5].value,
        dob: e.target[6].value,
      }),
    });
    alert("Added");
    getData();
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {show ? (
        <Usercontent
          setshow={setshow}
          edit={edit}
          handleeditEvent={handleeditEvent}
        />
      ) : (
        " "
      )}
      <Details
        editUser={editUser}
        deleteUser={deleteUser}
        data={data}
        getData={getData}
        handleaddEvent={handleaddEvent}
      />
    </div>
  );
}

export default App;
