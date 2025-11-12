# 💬 WebSocket Room-based Broadcasting 


This project demonstrates **room-based broadcasting using WebSockets** — when a client joins a specific room and sends a message, it is delivered **only to other clients in the same room**.  
Clients in different rooms remain completely isolated and do not receive each other’s messages.  

This is a great starting point for learning **real-time chat systems, multiplayer lobbies, and collaborative apps**.



## 🚀 Features
- 🔸 Join and leave specific rooms  
- 🔸 Broadcast messages only within the same room  
- 🔸 Built with Node.js and the `ws` library  
- 🔸 Lightweight, fast, and easy to extend  

---

## ⚙️ How It Works
1. A client connects to the WebSocket server.  
2. The client sends a `join` event with the room name (e.g., `"room-123"`).  
3. When a client sends a `message`, it is **broadcast only to users in the same room**.  
4. Clients in other rooms never receive it — ensuring perfect room isolation.  


