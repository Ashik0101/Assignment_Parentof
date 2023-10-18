import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    std: "",
    marks: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const marksValue = name === "marks" ? +value : value;

    setFormData({
      ...formData,
      [name]: marksValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "http://localhost:4000/student",
      formData
    );
    console.log("response: ", response.data);
    alert(response.data.message);

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name here..."
          />
        </div>
        <div>
          <label htmlFor="std">Std:</label>
          <input
            type="text"
            id="std"
            name="std"
            value={formData.std}
            onChange={handleInputChange}
            placeholder="Std..."
          />
        </div>
        <div>
          <label htmlFor="marks">Marks:</label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleInputChange}
            placeholder="Marks..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
