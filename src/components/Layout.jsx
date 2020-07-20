import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="column">
        <h1 className="title has-text-centered pb-2">Expense Tracker</h1>
      </header>
      {children}
    </>
  );
};

export default Layout;
