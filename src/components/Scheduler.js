import React, { useState, useEffect } from 'react';
import { db, ref, push, update, remove, onValue } from '../firebase';
import EventForm from './EventForm';
import ScheduleView from './ScheduleView';
import ShareModal from './ShareModal';

const Scheduler = () => {
  const [events, setEvents] = useState({});
  const [editingEvent, setEditingEvent] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  // Generate a random schedule ID for sharing
  const [scheduleId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || Math.random().toString(36).substr(2, 9);
  });

  // Fetch events from Firebase
  useEffect(() => {
    const eventsRef = ref(db, `schedules/${scheduleId}/events`);
    onValue(eventsRef, (snapshot) => {
      setEvents(snapshot.val() || {});
    });
  }, [scheduleId]);

  // Add new event
  const addEvent = (event) => {
    const eventsRef = ref(db, `schedules/${scheduleId}/events`);
    push(eventsRef, event);
  };

  // Update event
  const editEvent = (id, event) => {
    update(ref(db, `schedules/${scheduleId}/events/${id}`), event);
    setEditingEvent(null);
  };

  // Delete event
  const deleteEvent = (id) => {
    remove(ref(db, `schedules/${scheduleId}/events/${id}`));
  };

  // Open share modal
  const handleShare = () => setShareOpen(true);

  return (
    <div>
      <EventForm
        onSubmit={editingEvent ? (event) => editEvent(editingEvent, event) : addEvent}
        event={editingEvent ? { ...events[editingEvent], id: editingEvent } : null}
        onCancel={() => setEditingEvent(null)}
      />
      <ScheduleView
        events={events}
        onEdit={setEditingEvent}
        onDelete={deleteEvent}
      />
      <button onClick={handleShare} style={{ marginTop: '1em' }}>Share Schedule</button>
      <ShareModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        scheduleId={scheduleId}
      />
    </div>
  );
};

export default Scheduler;