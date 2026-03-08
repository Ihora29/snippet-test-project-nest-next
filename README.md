# snippet-test-project-nest-next
Snippet Vault
A small full-stack application for storing and managing text/code snippets.
Users can create snippets, view them in a list, and store them in a MongoDB database.
The project demonstrates a simple Next.js + NestJS + MongoDB architecture.
Tech Stack
Frontend
Next.js
React
TypeScript
Axios
Backend
NestJS
Node.js
REST API
Database
MongoDB
Mongoose
Features
Create new snippets
Store snippets in MongoDB
View all saved snippets
REST API built with NestJS
Simple full-stack architecture
TypeScript on both frontend and backend
Project Structure
snippetVault
│
├── backend
│   ├── src
│   │   ├── snippets
│   │   │   ├── snippets.controller.ts
│   │   │   ├── snippets.service.ts
│   │   │   └── snippets.schema.ts
│   │   └── app.module.ts
│   │
│   └── .env
│
├── frontend
│   ├── app
│   ├── components
│   │   ├── SnippetForm.tsx
│   │   └── SnippetList.tsx
│   │
│   └── lib
│       └── api.ts
│
└── README.md
Installation
Clone the repository:
git clone https://github.com/your-username/snippetVault.git
cd snippetVault
Backend Setup
Go to backend folder:
cd backend
Install dependencies:
npm install

Create .env file:
MONGO_URI=mongodb+srv://ihorihoor:123snippet@cluster0.o6mk9at.mongodb.net/?appName=Cluster0
PORT=3001

Run backend:

npm run start:dev

Backend will run on:

http://localhost:3001
Frontend Setup

Open new terminal and go to frontend folder:

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend will run on:

http://localhost:3000
API Example

Get all snippets:

GET /snippets

Create snippet:

POST /snippets

Example request body:

{
  "title": "Example snippet",
  "content": "console.log('Hello world');",
  "type": "code"
}
Environment Variables

Backend .env

MONGO_URI=your_mongodb_connection_string
PORT=3001
Future Improvements

Possible improvements for this project:

search snippets

tags for snippets

authentication

editing snippets

deleting snippets

pagination

syntax highlighting for code snippets

Author

Developer: Ihor

This project was created as a learning project to practice full-stack development with:

Next.js

NestJS

MongoDB

TypeScript
