// import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const now :string= new Date();
const hrs :string= now.getHours();
const mins :string= now.getMinutes();
const secs :string= now.getSeconds();
const schema :string = `${hrs}:${mins}:${secs}`;
const voir :string= "voir plus";

// const task = [
//   {
//     id: 1,
//     title: "One",
//     date: `${schema}`,
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
//   },`,
//   },
//   {
//     id: 2,
//     title: "Two",
//     date: `${schema}`,
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
//   },
//   {
//     id: 3,
//     title: "Three",
//     date: `${schema}`,
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
//   },
//   {
//     id: 4,
//     title: "Four",
//     date: `${schema}`,
//     text: ` Lorem ipsum dolor sit amet consectetur ad.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, ipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?`,
//   },
//   {
//     id: 5,
//     title: "Five",
//     date: `${schema}`,
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
//   },
//   {
//     id: 6,
//     title: "Six",
//     date: `${schema}`,
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
//   },
//   {
//     id: 7,
//     title: "Seven",
//     date: `${schema}`,
//     text: `.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
//     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?`,
//   },
// ];

function Set() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello JavaScript</h1>
    </>
  );
}

export default Set;
