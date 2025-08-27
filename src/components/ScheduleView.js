import React from 'react';

const ScheduleView = ({ events, onEdit, onDelete }) => {
  // Sort events by date and time
  const sorted = Object.entries(events)
    .map(([id, event]) => ({ ...event, id }))
    .sort((a, b) => {
      const d1 = new Date(`${a.date}T${a.time}`);
      const d2 = new Date(`${b.date}T${b.time}`);
      return d1 - d2;
    });

  return (
    <div>
      <h3>Events</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {sorted.map(event => (
          <li key={event.id} style={{ marginBottom: '0.75em', padding: '0.5em', border: '1px solid #eee', borderRadius: '5px' }}>
            <strong>{event.title}</strong> <br />
            {event.description && <span>{event.description}<br /></span>}
            {event.date} {event.time}
            <br />
            <button onClick={() => onEdit(event.id)} style={{ marginRight: '0.5em' }}>Edit</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </li>
        ))}
        {sorted.length === 0 && <li>No events yet.</li>}
      </ul>
    </div>
  );
};

export default ScheduleView;