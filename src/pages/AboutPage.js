import React, { useState, useEffect } from "react";
import supabase from "../utils/Supabase";
import LoadingSpinner from "../subComponents/LoadingSpinner";

const AboutPage = () => {
  const [about, setAbout] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(function () {
    async function loadAbout() {
      const { data: About } = await supabase.from("About").select("*");
      console.log(about);
      setAbout(About);
      setLoading(false);
    }
    loadAbout();
  }, []);
  if (Loading) return <LoadingSpinner />;
  return <div>Lala</div>;
};

export default AboutPage;
