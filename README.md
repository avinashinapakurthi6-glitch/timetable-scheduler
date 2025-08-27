# Time Table Scheduler

A simple online scheduler for mobile and desktop. No signup needed. Share schedules by link.

## Features

- Add, edit, delete events
- View as a list (expandable to calendar/week/month)
- Share your schedule by link
- Responsive UI

## Setup

1. Clone this repo.
2. Run `npm install`.
3. Create a Firebase project, enable Realtime Database.
4. Add your Firebase config to `.env` (see `.env.example`).
5. Run `npm start`.

## Usage

- Open app in browser.
- Add events.
- Share your schedule by link.

## Mobile/Desktop

- Works in mobile and desktop browsers.
- To package as a desktop app, use [Electron](https://www.electronjs.org/).
- To install as a mobile app, use [PWA](https://web.dev/install-criteria/) or [Cordova](https://cordova.apache.org/).

## Firebase Database Rules

For demo use, set your Realtime Database rules to:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**For public deployment, use more secure rules.**