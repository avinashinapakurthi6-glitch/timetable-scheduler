import React, { useState, useEffect } from 'react';

const defaultEvent = {
  title: '',
  description: '',
  date: '',
  time: '',
};

const EventForm = ({ onSubmit, event, onCancel }) => {
  const [form, setForm] = useState(defaultEvent);

  useEffect(() => {
    setForm(event ? event : defaultEvent);
  }, [event]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.time) return;
    onSubmit(form);
    setForm(defaultEvent);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1em', display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
        style={{ flex: '1 1 150px' }}
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        style={{ flex: '1 1 200px' }}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        style={{ flex: '1 1 120px' }}
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
        style={{ flex: '1 1 100px' }}
      />
      <button type="submit" style={{ flex: '1 1 80px' }}>{event ? 'Update' : 'Add'} Event</button>
      {event && <button type="button" onClick={onCancel} style={{ flex: '1 1 80px' }}>Cancel</button>}
    </form>
  );
};

export default EventForm;