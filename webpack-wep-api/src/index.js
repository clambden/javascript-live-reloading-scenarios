import http from 'http';
import listener from './listener.js';
const port = 3000;

let server = http.createServer(listener);
server.listen(port);

