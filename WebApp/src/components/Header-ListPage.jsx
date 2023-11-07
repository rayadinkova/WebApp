import "../styles/components_styles/header-listpage.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import PopUp from "./Modal";

export default function HeaderListPage() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="list-page-header-wrapper">
        <Link to="/mylists">
          <BiSolidLeftArrow className="list-page-header-arrow" />
        </Link>

        <h1>List page</h1>

        <BsThreeDotsVertical
          className="list-page-header-settings"
          onClick={openPopup}
        />

        <PopUp
          isOpen={isPopupOpen}
          onRequestClose={closePopup}
          contentLabel="Example Modal"
        >
          <div className="pop-up-content">
            <ul className="pop-up-ul">
              <Link to="/editlist" className="editlist-links">
                <li>Edit list</li>
              </Link>
              <div className="spacer"></div>

              <Link to="" className="editlist-links">
                <li>Delete list</li>
              </Link>
              <div className="spacer"></div>

              <li>Share list</li>
              <div className="spacer"></div>

              <li>Add people to the list</li>
            </ul>
          </div>
          <button className="popup-close-btn" onClick={closePopup}>
            Close
          </button>
        </PopUp>
      </div>
    </>
  );
}
