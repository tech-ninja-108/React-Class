import React, { useState } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);
  const [editData, setEditData] = useState(null);

  const updateHandel = (data) => {
    setEditData(data);
    setToggle((pre) => !pre);
  };

  const deleteHandel = (id) => {
    const dele = user.filter((e) => id !== e.id);
    setUser(dele);
  };

  return (
    <div className="">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap min-h-screen bg-slate-100 pt-25">
          {user.map((data, index) => (
            <User
              key={index}
              data={data}
              deleteHandel={deleteHandel}
              updateHandel={updateHandel}
            />
          ))}
        </div>
      ) : (
        <Form
          setUser={setUser}
          user={user}
          setToggle={setToggle}
          editData={editData}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};

export default App;
