import NodeMediaServer from 'node-media-server';

function initMediaServer() {
    const nms = new NodeMediaServer({
        rtmp: {
            port: 1935,
            chunk_size: 60000,
            gop_cache: true,
            ping: 30,
            ping_timeout: 60
        },
        http: {
            port: 8000,
            mediaroot: './media',
            allow_origin: '*'
        }
    })
    return nms;
}

export default initMediaServer;
