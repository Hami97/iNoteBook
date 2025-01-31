import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";
export const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    //esline-disable-next-line
  }, []);

  return (
    <div>
      This is About {a.state.name} and he is in {a.state.class}
    </div>
  );
};
