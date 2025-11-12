
// import { WebSocketServer, WebSocket } from 'ws'
// const wss = new WebSocketServer({ port: 8080 })

// interface user {
//     socket: WebSocket;
//     room: string;
// }

// let allsockets: user[] = []  // global array

// wss.on('connection', (socket) => {

//     socket.on('message', (message) => {

//         // incoming websocket data → convert to string → parse JSON
//         const parsedmessage = JSON.parse(message.toString())

//         if (parsedmessage.type == "join") {
//             console.log("user-connected " + parsedmessage.payload.roomid)
//             allsockets.push({
//                 socket,
//                 room: parsedmessage.payload.roomid
//             })
//         }

//         if (parsedmessage.type == "chat") {
//             console.log("user chat is here")
//             let currentuserroom: string | null = null

//             // find current user's room
//             for (let i = 0; i < allsockets.length; i++) {
//                 if (allsockets[i].socket === socket) {
//                     currentuserroom = allsockets[i].room
//                     break
//                 }
//             }

//             // if somehow not found → stop safely
//             if (!currentuserroom) return

//             // send message to everyone in that room
//             for (let i = 0; i < allsockets.length; i++) {
//                 if (allsockets[i].room === currentuserroom) {
//                     allsockets[i].socket.send(parsedmessage.payload.message)
//                 }
//             }
//         }

//     })

// })

import { WebSocketServer, WebSocket } from 'ws'
const wss = new WebSocketServer({ port: 8080 })

interface user {
    socket: WebSocket;
    room: string;
}

let allsockets: user[] = []  // global array

wss.on('connection', (socket) => {

    socket.on('message', (message) => {

        // incoming websocket data → convert to string → parse JSON
        const parsedmessage = JSON.parse(message.toString())

        if (parsedmessage.type == "join") {
            console.log("user-connected " + parsedmessage.payload.roomid)
            allsockets.push({
                socket,
                room: parsedmessage.payload.roomid
            })
        }

        if (parsedmessage.type == "chat") {
            console.log("user chat is here")
            let currentuserroom: string | null = null

            // find current user's room
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i].socket === socket) {
                    currentuserroom = allsockets[i].room
                    break
                }
            }

            // if somehow not found → stop safely
            if (!currentuserroom) return

            // send message to everyone in that room
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i].room === currentuserroom) {
                    allsockets[i].socket.send(parsedmessage.payload.message)
                }
            }
        }

    })

})
