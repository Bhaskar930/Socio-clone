# 🌐 Socio Clone App

A full-stack **MERN (MongoDB, Express, React, Node.js)** social media web application where users can **sign up, log in, create posts, and view a personal dashboard.**

This app is designed as a **clone of a basic social platform** — focusing on secure authentication, protected routes, and seamless interaction between frontend and backend.

---

## 🚀 Features

- 🔐 **JWT Authentication** — Secure login & signup.
- 👤 **User Dashboard** — Personalized dashboard after login.
- 📝 **Create & Manage Posts** — Users can create posts dynamically.
- ⚙️ **Protected Routes** — Accessible only to authenticated users.
- 🧠 **MERN Stack** — Built using MongoDB, Express, React, and Node.js.
- 🌐 **Fully RESTful API Integration**.
- 💬 **Postman-tested Backend** for reliability.

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- React Router  
- Axios  
- TailwindCSS / Custom CSS  

### **Backend**
- Node.js  
- Express.js  
- MongoDB Atlas  
- JWT (JSON Web Token)  
- bcryptjs  

---

## ⚙️ Installation and Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/socio-clone-app.git
cd socio-clone-app
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend/ directory with:

env
Copy code
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Run the backend:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
