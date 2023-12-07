import React, { useEffect, Fragment, FC } from "react";

interface ScrollToTopProps {
  children: React.ReactNode;
  path: any;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ path, children }) => {
  useEffect(() => {
    const unlisten = path.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [path]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
