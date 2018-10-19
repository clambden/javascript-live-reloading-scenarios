import msgProvider from './msg-provider.js';

export default function listener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Message from: " + msgProvider());
    res.end();
}

if (module.hot) {
    module.hot.accept('./msg-provider.js', function () {
        console.log('[HMR Accept] Accepting the updated Msg Provider module from listener.js!');
    });
}