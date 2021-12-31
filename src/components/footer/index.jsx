import React from "react";
import {
  FooterWrapper,
  FooterCounts,
  FooterCopy,
  ListCout,
} from "./FooterElements";
const Footer = ({ tasks }) => {
  return (
    <>
      <FooterWrapper>
        <FooterCounts>
          <>
            <ListCout>
              Active tasks:
              {tasks.filter((task) => task.status === "backlog").length}
            </ListCout>
            <ListCout>
              Finished tasks:
              {tasks.filter((task) => task.status === "finished").length}
            </ListCout>
          </>
        </FooterCounts>
        <FooterCopy>
            Kanban board by Dolotow Sergey, 2021
        </FooterCopy>
      </FooterWrapper>
    </>
  );
};

export default Footer;
