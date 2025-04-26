import React, { useState, useContext } from "react";
import IncidentList from "./IncidentList";
import { IncidentContext } from "../context/IncidentContext";

function IncidentDashboard() {
  const { incidents } = useContext(IncidentContext);

  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredIncidents = incidents.filter(
    (incident) =>
      (filter === "All" || incident.severity === filter) &&
      incident.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    if (sortOrder === "Newest") {
      return new Date(b.reported_at) - new Date(a.reported_at);
    } else {
      return new Date(a.reported_at) - new Date(b.reported_at);
    }
  });

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-violet-700">
        Incident Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔎 Search incidents by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-3/4 p-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-300"
        />
      </div>

      <div className="flex flex-wrap items-end gap-6 mb-8 justify-center">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-violet-700">
            Filter by Severity:
          </label>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="p-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-300"
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex gap-4">
          {["Newest", "Oldest"].map((order) => (
            <button
              key={order}
              onClick={() => handleSortChange(order)}
              className={`py-3 px-6 rounded-full font-semibold shadow-md transition duration-300
                ${
                  sortOrder === order
                    ? "bg-violet-500 hover:bg-violet-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-violet-700"
                }`}
            >
              {order === "Newest" ? "Newest First" : "Oldest First"}
            </button>
          ))}
        </div>
      </div>

      <IncidentList incidents={sortedIncidents} />
    </div>
  );
}

export default IncidentDashboard;
