import React from "react";
import Form from "./Components/Form";

function App() {
  const initialFormValues = {
    name: "",
    email: "",
    city: "",
    address: "",
    phone: "",
    password: "",
  };

  const handleSubmit = (data) => {
    console.log("Form submitted with:", data);
  };

  const alertUser = (message) => {
    alert(message);
  };

  return (
    <>
      <Form
        heading="React Event Handling Form"
        initialData={initialFormValues}
        onFormSubmit={handleSubmit}
        showAlert={alertUser}
      />
    </>
  );
}

export default App;
