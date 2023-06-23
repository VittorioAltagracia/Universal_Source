import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuestionsByCategory } from "../questions/questionsSlice";
import Question from "../questions/Question";

const DynamicPage = () => {
  const { categoryName } = useParams();
  // const question = useSelector(selectQuestionsByCategory(categoryName));

  return (
    <div>
      It's dynamic
      {/* <Question question={question} /> */}
      Selected category: {categoryName}
    </div>
  );
};

export default DynamicPage;
