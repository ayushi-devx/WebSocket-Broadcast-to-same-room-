

import { WebSocketServer, WebSocket} from 'ws'
const wss=new WebSocketServer ({port:8081})
// to start wb server
let allsockets:WebSocket[]=[]

// socket lets you to talk that person joh connect hua , then recieving msg from them on socket

let usercount=0;
wss.on('connection',(socket)=>{
    allsockets.push(socket)
    
    usercount=usercount+1
    console.log('user-connected # '+ usercount)

    // we created a handler to recieve msgs from postman
    socket.on('message',(message)=>{
        console.log("msg recieved "+message.toString())
        // now i send this msg to postman

            // socket.send(message.toString() + "sent from server")
            

            for(let s of allsockets){
               
                s.send(message.toString() + "sent from server")
            }



})
socket.on("disconnect",()=>{
    allsockets=allsockets.filter(x=>x!=socket)
})

})
