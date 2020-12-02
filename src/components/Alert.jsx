import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [list]);

  return (
    <div>
      <p className={`py-2 mt-4 font-medium ${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
