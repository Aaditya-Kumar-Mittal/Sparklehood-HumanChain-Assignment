import React from 'react';
import IncidentItem from './IncidentItem';

function IncidentList({ incidents }) {
  if (incidents.length === 0) {
    return <p className="text-center text-2xl text-red-500">No incidents match your filters.</p>;
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
}

export default IncidentList;
