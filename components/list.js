import React from "react";
import "../styles/list.css";

export default function List({ data }) {
  return (
    <ul>
      {data.map((item, index) => {
        if (item.includes(":")) {
          const [part1, part2] = item.split(":");
          return (
            <li className="li-parent" key={index}>
              <div className="title4">
                {part1}
                <p className="li-item ">{part2}</p>
              </div>
            </li>
          );
        } else {
          return (
            <li className="li-parent li-item text-center" key={index}>
              {item}
            </li>
          );
        }
      })}
    </ul>
  );
}
