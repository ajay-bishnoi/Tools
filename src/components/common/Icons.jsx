import React from "react";

const Icons = ({ icon, className }) => {
  const iconList = {
    facebookIcon: (
      <svg
        width="11"
        height="19"
        viewBox="0 0 11 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.31193 18.6864H6.17158V10.9574H9.64912L10.0312 7.11706H6.17158V5.17759C6.17158 4.92168 6.27324 4.67625 6.4542 4.49529C6.63515 4.31434 6.88058 4.21268 7.13649 4.21268H10.0312V0.353027H7.13649C5.85694 0.353027 4.62979 0.861328 3.72501 1.76611C2.82023 2.67089 2.31193 3.89804 2.31193 5.17759V7.11706H0.382105L0 10.9574H2.31193V18.6864Z"
          fill="white"
        />
      </svg>
    ),
  };
  return (
    <span className={`${className} inline-block`}>
      {icon && iconList[icon]}
    </span>
  );
};

export default Icons;
