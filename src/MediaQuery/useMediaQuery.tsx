import React from "react";

import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

const MobileResumStatusBar = ({ children }: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width:599px",
  });

  return <>{isMobile && children}</>;
};

export default MobileResumStatusBar;
