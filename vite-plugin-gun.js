/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet

  Information:
    Does work and not work as conflict reload. Did not look into how to fixed url error reload.

*/

// https://vitejs.dev/guide/api-plugin.html
// https://vitejs.dev/guide/api-plugin.html#client-server-communication
import Gun from "gun";

var gun;

export default function myPlugin() {
  return {
    name: 'vite-plugin-gun',
    configureServer(server) {
      //server.middlewares.use((req, res, next) => {
        // custom handle request...
        //if (Gun.serve(req, res)) {//get gun.js ex. <script src="/gun.js">
          //return next();
        //}
      //})
      //console.log(server)
      console.log("init gun?")
      gun = Gun({
        file: "data",
        //web:app.server //server
        web: server.middlewares
        //web: server.middlewares.listen
        //web: server.middlewares.listeners
        //web: server.middlewares.rawListeners
        //web: server.httpServer
        //web: server.ws
      });
      
      
      gun.on("hi", peer => {
        //peer connect
        //console.log('connect peer to',peer);
        console.log("peer connect!");
      });
      gun.on("bye", peer => {
        // peer disconnect
        //console.log('disconnected from', peer);
        console.log("disconnected from peer!");
      });
      
      
    }
  }
}