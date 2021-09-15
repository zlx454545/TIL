import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [cureentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChage = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChage);

    return () => {
      window.removeEventListener("popstate", onLocationChage);
    };
  }, []);

  return cureentPath === path ? children : null;
};

export default Route;
