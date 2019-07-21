import React from "react";
import { Card } from "../../components/card";

const cardLists = [
  {
    title: "Overview",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    title: "Api Refernce",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    title: "My apps",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    title: "New apps",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  }
];

export const DeveloperPage = () => {
  return (
    <div className="container" style={{ margin: "46px 0 46px" }}>
      Developer page
      <ul>
        {cardLists.map(cardList => {
          return (
            <li>
              <Card {...cardList} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeveloperPage;
