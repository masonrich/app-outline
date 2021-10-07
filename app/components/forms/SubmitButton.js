import React from "react";
import { useFormikContext } from "formik";

import Button from "../reusable/Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} color={"secondary"} />;
}

export default SubmitButton;
