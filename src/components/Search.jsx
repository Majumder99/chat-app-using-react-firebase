import React from "react";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder="find an user" />
        </div>
        <div className="userChat">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
