Repro instructions

1. Set environment variable `REACT_APP_DSN`
2. Run `npm i` then `npm start`
3. Pop open network tab
4. Click the button to trigger an error
5. Verify whether the "event_id" in the network tab matches the event id shown by the react component


Created for 
- https://github.com/getsentry/sentry-javascript/issues/4534#issuecomment-1035024566
- https://github.com/getsentry/sentry-javascript/issues/8281
