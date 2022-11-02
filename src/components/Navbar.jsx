import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logo">Lama chat</span>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <span>John</span>
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
