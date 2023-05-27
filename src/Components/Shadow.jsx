import React from "react";

const Shadow = ({ setOpen }) => {
  return <div className="shadow" onClick={() => setOpen(false)}></div>;
};

export default Shadow;
