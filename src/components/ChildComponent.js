import React from "react";

import QuestionsPage from "../pages/QuestionsPage";

const ChildComponent = ({ selected }) => {
  return (
    <div>
      <QuestionsPage selected={selected} />
    </div>
  );
};

export default ChildComponent;
