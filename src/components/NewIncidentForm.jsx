import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IncidentContext } from "../context/IncidentContext";

function NewIncidentForm() {
  const { addIncident } = useContext(IncidentContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    addIncident(newIncident);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg max-w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Report New Incident
      </h2>
      <input
        className="w-full p-2 border-2 border-violet-600 rounded mb-4"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border-2 border-violet-600 rounded mb-4"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="w-full p-2 border-2 border-violet-600 rounded mb-4"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        type="submit"
        className="bg-violet-500 hover:bg-violet-700 text-white p-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}

export default NewIncidentForm;
