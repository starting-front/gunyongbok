import React from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

export const MobileResumStatusBar = ({ children }: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 599px)",
  });

  return <>{isMobile && children}</>;
};

export const PcResumeStatusBar = ({ children }: Props) => {
  const isPc = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return <>{isPc && children}</>;
};
