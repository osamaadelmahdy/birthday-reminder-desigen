import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((i) => (
        <div key={i.id} className="listItem">
          <img src={i.image} alt={i.name} />
          <div style={{ padding: "0 10px" }}>
            <h3>{i.name}</h3>
            <p>{i.age} years old </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
