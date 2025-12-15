// import React from "react";
// import { FaExchangeAlt } from "react-icons/fa";
const notes = [
  {
    id: 1,
    title: "The boy that fall on th e ground",
    details:
      "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
    date: "6/JAN/2023",
  },

  {
    id: 2,
    title: "The boy that fall on th e ground",
    details:
      "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
    date: "6/JAN/2023",
  },
  {
    id: 3,
    title: "The boy that fall on th e ground",
    details:
      "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
    date: "6/JAN/2023",
  },
  {
    id: 4,
    title: "The boy that fall on th e ground",
    details:
      "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
    date: "6/JAN/2023",
  },
  {
    id: 5,
    title: "The boy that fall on th e ground",
    details:
      "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
    date: "6/JAN/2023",
  },
];

function Set() {
  return (
    <>
      {notes.map(({ id, title, details, date }) => {
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{details}</p>
            <h3>{date}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Set;
