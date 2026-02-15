<h1 align="center">🎬 VibeVision OTT Platform</h1>

<p align="center">
A full-stack OTT streaming platform built using the MERN stack (MongoDB, Express, React, Node.js) with secure authentication, admin dashboard, and content management system.
</p>

<hr>

<h2>📌 Overview</h2>

<p>
VibeVision is a full-stack OTT platform that allows users to browse and stream movies and allows administrators to manage platform content through a dedicated admin panel. The platform demonstrates modern backend architecture, RESTful API design, authentication, and full-stack integration.
</p>

<p>
This project was built to showcase real-world backend and full-stack development skills including authentication, content management, API development, and system integration.
</p>

<hr>

<h2>🚀 Features</h2>

<h3>User Features</h3>
<ul>
<li>User authentication (JWT-based login)</li>
<li>Browse movies and content lists</li>
<li>Stream video content</li>
<li>Responsive frontend built with React</li>
</ul>

<h3>Admin Features</h3>
<ul>
<li>Admin dashboard</li>
<li>Create, update, and delete movies</li>
<li>Manage users</li>
<li>Create and manage content lists</li>
<li>Secure role-based access</li>
</ul>

<h3>Backend Features</h3>
<ul>
<li>RESTful API architecture</li>
<li>JWT authentication and authorization</li>
<li>MongoDB database integration</li>
<li>Secure API endpoints</li>
<li>Media file serving via Express static middleware</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
<li>React.js</li>
<li>Vite</li>
<li>Axios</li>
<li>Context API</li>
<li>Material UI</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>JWT Authentication</li>
</ul>

<h3>Admin Panel</h3>
<ul>
<li>React.js</li>
<li>Material UI</li>
<li>REST API integration</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
ott-platform/
│
├── api/                 → Express backend
├── AdminPanel/         → Admin dashboard frontend
├── VibeVision/         → User frontend
├── images/             → Media assets
│
├── package.json
├── .gitignore
└── README.md
</pre>

<hr>

<h2>⚙️ Installation and Setup</h2>

<h3>Prerequisites</h3>

<ul>
<li>Node.js (v18 or higher)</li>
<li>MongoDB (local or cloud)</li>
<li>Git</li>
</ul>

<hr>

<h3>Step 1: Clone the repository</h3>

<pre>
git clone https://github.com/Harshad-Yewale/VibeVision-OTT_Platform.git
cd ott-platform
</pre>

<hr>

<h3>Step 2: Setup Backend</h3>

<pre>
cd api
npm install
</pre>

Create a <b>.env</b> file inside api folder:

<pre>
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</pre>


<h3>Step 4: Run the Entire Project</h3>

Run this single command from root folder:

<pre>
npm run dev
</pre>

This will start:

<ul>
<li>Backend Server → http://localhost:8800</li>
<li>User Frontend → http://localhost:5174</li>
<li>Admin Panel → http://localhost:5173</li>
</ul>

<hr>

<h2>🔐 Authentication</h2>

<p>
The platform uses JWT-based authentication. Users must log in to access protected resources. Admin users have additional privileges for content management.
</p>

<hr>

<h2>📡 API Endpoints</h2>

<h3>Authentication</h3>

<pre>
POST /api/auth/login
</pre>

<h3>Users</h3>

<pre>
GET /api/users
DELETE /api/users/:id
</pre>

<h3>Movies</h3>

<pre>
GET /api/movies
POST /api/movies
PUT /api/movies/:id
DELETE /api/movies/:id
</pre>

<h3>Lists</h3>

<pre>
GET /api/lists
POST /api/lists
PUT /api/lists/:id
DELETE /api/lists/:id
</pre>

<hr>

<h2>🖼️ Media Serving</h2>

<p>
Media files are served using Express static middleware:
</p>

<pre>
http://localhost:8800/images/filename.jpg
</pre>

<hr>

<h2>📈 Learning Outcomes</h2>

<ul>
<li>Full-stack MERN development</li>
<li>REST API design and implementation</li>
<li>Authentication and authorization</li>
<li>Backend architecture and database integration</li>
<li>Frontend and backend integration</li>
<li>Admin dashboard development</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<b>Harshad Yewale</b><br>
Backend Developer | Java, Spring Boot, MERN Stack<br>
</p>

<hr>

<h2>📄 License</h2>

<p>
This project is for educational and portfolio purposes.
</p>

<hr>

<h2 align="center">⭐ If you found this project useful, consider giving it a star!</h2>

