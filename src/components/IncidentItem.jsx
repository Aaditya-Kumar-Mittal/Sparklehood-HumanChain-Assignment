import React, { useState } from "react";

function IncidentItem({ incident }) {
  const [expanded, setExpanded] = useState(false);

  // Function to determine the severity color
  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-500 text-white"; // Red for high severity
      case "medium":
        return "bg-yellow-500 text-white"; // Yellow for medium severity
      case "low":
        return "bg-green-500 text-white"; // Green for low severity
      default:
        return "bg-gray-500 text-white"; // Default color if severity is unknown
    }
  };

  return (
    <div className="w-1/2 mx-auto  p-5 rounded-lg bg-violet-100 shadow-xl hover:shadow-2xl transition duration-300 mb-5">
      <h3 className="text-xl font-semibold mb-4">{incident.title}</h3>
      <p
        className={`inline-block px-3 py-1 rounded-lg mb-3 ${getSeverityColor(
          incident.severity
        )}`}
      >
        Severity: {incident.severity}
      </p>
      <p>Reported At: {new Date(incident.reported_at).toLocaleDateString()}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-violet-500 font-bold text-xl mt-2 hover:underline"
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
      {expanded && <p className="mt-2">{incident.description}</p>}
    </div>
  );
}

export default IncidentItem;
