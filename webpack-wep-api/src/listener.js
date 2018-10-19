import msgProvider from './msg-provider.js';

export default function listener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(msgProvider());
    res.end();
}