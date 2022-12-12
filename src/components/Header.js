import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header className="d-flex px-4 custom-header">
        <h1 className="text-light header-text">Steve Calla</h1>

        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
    </>
  );
}

export default Header;
