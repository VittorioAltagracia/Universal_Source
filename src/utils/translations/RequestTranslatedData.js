import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getQuestions,
  selectAllQuestions,
} from "../../questions/questionsSlice";
import i18n, { setResources } from "./i18n";

const RequestTranslatedData = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestions);

  useEffect(() => {
    dispatch(getQuestions()).then(() => {
      setResources(questions);
    });
  }, []);
  console.log("I have finished running");

  // return null;
};

export default RequestTranslatedData;
