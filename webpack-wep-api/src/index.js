import http from 'http';
import listener from './listener.js';
const port = 3000;

let server = http.createServer(listener);
server.listen(port);

if (module.hot) {

    module.hot.accept('./listener.js', () => {
        console.log('[HMR Accept] Accepting the updated listener.js module from index.js!');
    });
  }
