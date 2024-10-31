export default
{
    "browserSyncDev": {
        "port": 3000,
        "server": {
            "baseDir": "public",
            "index": "index.html"
        },
        "ui": {
            "port": 3001
        }
    },
    "browserSyncDocker": {
        "port": 3000,
        "proxy": "http://127.0.0.1:7702/",
        "server": false,
        "ui": false
    },
    "browserSyncConfig": "browserSyncDev",
    "sourcePath": "src/",
    "publicPath": "public/",
    "systemPath": "path/to/system/",
    "env": "prod"
}
