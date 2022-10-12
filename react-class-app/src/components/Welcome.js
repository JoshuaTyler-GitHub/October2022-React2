import { useEffect, useState } from "react";

const Welcome = (props) => {
  const { favoriteColor, name } = props;
  return (
    <div>
      Hello, {name}, favorite color is: {favoriteColor}
    </div>
  );
};
export default Welcome;
