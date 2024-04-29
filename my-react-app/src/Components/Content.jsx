import React from "react";
function Content({ value }) {
  console.log(value);
  const gender = value.gender;
  const firstName = value.name.first;
  const lastName = value.name.last;
  const titleName = value.name.title;
  const phoneNumber = value.phone;
  const imgsrc = value.picture.large;
  console.log(gender, firstName, lastName, titleName, phoneNumber, imgsrc);
  return (
    <div>
      <div className="card-wrapper">
        <div>
          <img src={imgsrc} alt="user" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className="user-name">
            <h2>
              {titleName}&nbsp;
              {firstName}&nbsp;
              {lastName}
            </h2>
          </div>
          <div className="designation">
            <h3>{gender}</h3>
          </div>
          <div className="user-name">
            <h3>{phoneNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
