import React from "react";
import "./DetailsCard.css";
function DetailsCard(props) {
  const { _id, title, author, description, cover_image, borrower } =
    props.details;
  return (
    <div className="ditailsPage__container">
      <div className="DetailsCard__container">
        <h1 className="Book_details__heading">Book details</h1>
        <p>id: {_id}</p>
        <h2>Title: {title}</h2>
        <h3>Author: {author}</h3>
        <p>Description: {description}</p>
        <img src={cover_image} alt={cover_image} />
        <h3 className="Borrower__heading">Borrower Details</h3>
        <h4>Name: {borrower.name}</h4>
        <h4>Email: {borrower.email}</h4>
        <h4>Due Date: {borrower.due_date}</h4>

        <button className="button">Borrow</button>
      </div>
    </div>
  );
}

export default DetailsCard;
