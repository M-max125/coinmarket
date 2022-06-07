import React from "react";
import RightArrow from "../../assets/svg/rightArrow";

const styles = {
  buttonM: `text-[#6188FF] flex items-center cursor-pointer whitespace-no-wrap justify-between`,
};

const MoreButton = () => {
  return (
    <div className={styles.buttonM}>
      More <RightArrow />
    </div>
  );
};

export default MoreButton;
