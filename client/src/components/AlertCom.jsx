import { Alert } from "flowbite-react";
import React from "react";

const AlertCom = ({err}) => {
  return (
    <Alert color="info">
      {err}
    </Alert>
  );
};

export default AlertCom;
