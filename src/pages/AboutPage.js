import React, { useState, useEffect } from "react";
import supabase from "../utils/Supabase";

const AboutPage = () => {
  const [about, setAbout] = useState("ddffd");

  useEffect(function () {
    async function loadAbout() {
      const { data: about, error } = await supabase.from("About").select("*");
      console.log(about);
      setAbout(about);
    }
    loadAbout();
  }, []);
  return <div>AboutPage</div>;
};

export default AboutPage;
