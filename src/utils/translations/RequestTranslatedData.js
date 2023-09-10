import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import {
  getQuestions,
  selectAllQuestions,
} from "../../questions/questionsSlice";
import i18n, { setResources } from "./i18n";

const RequestTranslatedData = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestions);

  // the logic below is needed to prevent the setResouces function from running before the data arrives to the redux store, there are a couple of asyncronous operations happening when user requests translation so the following needs to be in place.
  const [dataIsFetched, setDataIsFetched] = useState(false);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questions !== null) {
      setResources(questions);
      i18n.changeLanguage(i18n.language);
      setDataIsFetched(true);
    }
  }, [questions]);

  if (!dataIsFetched) {
    return null;
  }
};

export default RequestTranslatedData;
