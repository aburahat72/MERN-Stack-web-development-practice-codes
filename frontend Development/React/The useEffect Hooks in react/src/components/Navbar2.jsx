import React, { useEffect } from "react";

const Navbar2 = ({ color }) => {
  // I will run on every render
  useEffect(() => {
    alert(
      "The is the universal States every referesh i will works because it does not have [] brackets",
    );
  });

  // This useEffect is used for wellcoming the user
  // Run only on first render
  useEffect(() => {
    alert("wellcome to my web page and i will only in first render");
     return () => {
    alert("The component was unmounted")
  }
  }, []);

  // Here we can use the useEffect for alert when the color change 
  useEffect(() => {
    alert("the color has changed");
  }, [color]);

  return (
    <div>
      <p>Iam the navbar the color is {color}</p>
    </div>
  );
};

export default Navbar2;

