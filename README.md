# 🌟✨ AI-Powered Career Mentorship & Job Prep Platform ✨🌟

An intelligent full-stack platform that helps students and professionals with career guidance, mentorship, and job preparation.
It combines modern web development with AI-powered features, offering a personalized experience for users.


🌟 Key Features
🔐 Secure Authentication (Register/Login with JWT & bcrypt)
🧑‍💼 Career Mentorship Portal – Connect with mentors and get personalized advice
🤖 AI-Powered Job Preparation – Resume feedback, interview tips, and career guidance (planned)
📊 Dashboard – User-friendly dashboard to track learning and mentorship progress
⚡ Modern Full-Stack Development – Built with React, Node.js, Express & MongoDB
📱 Responsive UI – Optimized for desktop and mobile

🛠️ Tech Stack
Frontend: React, TailwindCSS, React Router
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT, bcrypt
AI Services (Planned): OpenAI / LLMs for resume feedback & mentorship Q&A
Tools & DevOps: Docker, Git, GitHub, VS Code

📂 Project Structure 

career-mentor-platform/
│── ai-service/      
│── client/          
│── server/         
│── database/       
│── docs/            
│── .env.example      
│── docker-compose.yml
│── README.md


1️⃣ Clone the repository
git clone https://github.com/LINGESHWARI22/career-mentor-platform.git
cd career-mentor-platform

2️⃣ Install dependencies
Backend
cd server
pnpm install   # or npm install


Frontend
cd client
pnpm install   # or npm install

3️⃣ Setup Environment Variables
Create a .env file in server/ with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the app
Backend
cd server
pnpm dev

Frontend
cd client
pnpm dev

5️⃣ Open in Browser
Frontend → http://localhost:5173
Backend API → http://localhost:5000

🎯 Roadmap
 User Authentication (Register/Login)
 Secure JWT-based Auth
 AI-powered Resume Analyzer (LLM)
 Mock Interview Simulator
 Mentor–Student Chat System (WebSockets)
 Job Recommendation Engine


