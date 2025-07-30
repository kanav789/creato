# Creato Backend

A Node.js/Express backend API for the Creato application - a platform for creating and managing user profiles with authentication.

## 🚀 Features

- **User Authentication**: Registration and login with JWT tokens
- **Profile Management**: Create, read, update, and delete user profiles
- **Secure Endpoints**: Protected routes with JWT middleware
- **MongoDB Integration**: Mongoose ODM for database operations
- **CORS Support**: Cross-origin resource sharing enabled

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository and navigate to the backend directory:

```bash
cd creatobackend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

This runs the server with nodemon for automatic restarts on file changes.

### Production Mode

```bash
node server.js
```

The server will start on `http://localhost:4000` (or your specified PORT).

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint             | Description         | Authentication |
| ------ | -------------------- | ------------------- | -------------- |
| POST   | `/api/auth/register` | Register a new user | No             |
| POST   | `/api/auth/login`    | Login user          | No             |

### Profile Routes (`/api/profile`)

| Method | Endpoint               | Description         | Authentication |
| ------ | ---------------------- | ------------------- | -------------- |
| POST   | `/api/profile/create`  | Create user profile | Yes            |
| POST   | `/api/profile/update`  | Update user profile | Yes            |
| POST   | `/api/profile/delete`  | Delete user profile | Yes            |
| GET    | `/api/profile/get/:id` | Get profile by ID   | No             |

## 📊 Data Models

### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required)
}
```

### Profile Model

```javascript
{
  userId: ObjectId (required),
  username: String,
  bio: String,
  importantLinks: [String],
  skills: [String],
  experiences: [{
    startDate: Date,
    endDate: Date,
    role: String,
    company: String,
    description: String
  }],
  projects: [{
    title: String,
    details: String,
    GitHubLink: [String],
    liveLink: String
  }]
}
```

## 🏗️ Project Structure

```
creatobackend/
├── controllers/          # Route handlers
│   ├── AuthController.js     # Authentication logic
│   └── ProfileController.js  # Profile management logic
├── db/                   # Database configuration
│   └── Db.js                # MongoDB connection
├── models/               # Data models
│   ├── UserModel.js         # User schema
│   └── UserProfile.js       # Profile schema
├── routes/               # API routes
│   ├── AuthRoutes.js        # Authentication routes
│   └── ProfileRoutes.js     # Profile routes
├── utility/              # Helper functions
│   ├── Middleware.js        # JWT authentication middleware
│   └── TokenFunc.js         # Token utility functions
├── server.js             # Main application file
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the request headers:

```
Authorization: Bearer <your_jwt_token>
```

## 🔧 Environment Variables

| Variable      | Description                 | Required |
| ------------- | --------------------------- | -------- |
| `MONGODB_URI` | MongoDB connection string   | Yes      |
| `JWT_SECRET`  | Secret key for JWT signing  | Yes      |
| `PORT`        | Server port (default: 4000) | No       |

## 📦 Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **jsonwebtoken**: JWT implementation
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable loader

## 🚦 Development Dependencies

- **nodemon**: Development server with auto-restart

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**: Ensure your MongoDB URI is correct and the database is running
2. **JWT Token Issues**: Check that JWT_SECRET is set in your environment variables
3. **CORS Issues**: The server has CORS enabled by default for all origins

### Support

If you encounter any issues, please check the console logs for detailed error messages.
