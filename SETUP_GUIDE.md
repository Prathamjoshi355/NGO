# Complete NGO Project Setup Guide

## 🚀 Full Project Setup Instructions

### Part 1: Backend Setup

#### 1.1 Install Dependencies
```bash
cd backend
npm install
```

#### 1.2 Configure Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values
```

#### 1.3 MongoDB Setup
```bash
# Option 1: Local MongoDB
# Make sure MongoDB is running: mongod

# Option 2: MongoDB Atlas (Cloud)
# 1. Create account at https://www.mongodb.com/cloud/atlas
# 2. Create cluster
# 3. Get connection string
# 4. Add to .env as MONGODB_URI
```

#### 1.4 Start Backend
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start

# Server runs on http://localhost:3000
```

---

### Part 2: Frontend Setup

#### 2.1 Install Dependencies
```bash
cd frontend
pnpm install
# or
npm install
```

#### 2.2 Configure Environment
```bash
# Create .env.local
echo "VITE_API_URL=http://localhost:3000/api" > .env.local
```

#### 2.3 Start Frontend
```bash
pnpm dev
# or
npm run dev

# App runs on http://localhost:5173
```

---

### Part 3: Initial Admin Setup

#### 3.1 Create First Admin
```bash
# Option 1: Using API directly
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ngo.com",
    "password": "securepassword123"
  }'

# Option 2: Use the Admin Login page
# Go to http://localhost:5173/admin-login
# Click signup (if register endpoint is exposed)
# Fill in email and password
```

#### 3.2 Login to Admin Panel
```
URL: http://localhost:5173/admin-login
Email: admin@ngo.com
Password: securepassword123

Then access: http://localhost:5173/admin
```

---

## 🔐 Environment Variables Checklist

### Backend .env
```env
☐ MONGODB_URI - MongoDB connection string
☐ JWT_SECRET - Random 32+ character string (keep secret!)
☐ JWT_EXPIRE - Token expiry (e.g., 7d)
☐ PORT - Server port (default: 3000)
☐ NODE_ENV - development or production
☐ CLOUDINARY_NAME - For image uploads
☐ CLOUDINARY_API_KEY - For image uploads
☐ CLOUDINARY_API_SECRET - For image uploads
☐ STRIPE_PUBLIC_KEY - For donations (optional)
☐ STRIPE_SECRET_KEY - For donations (optional)
☐ EMAIL_SERVICE - Email provider (optional)
☐ FRONTEND_URL - Frontend URL for CORS
```

### Frontend .env.local
```env
☐ VITE_API_URL - Backend API URL
```

---

## 📊 Database Initialization

### MongoDB Collections Created Automatically
- `admins` - Admin accounts
- `blogs` - Blog posts
- `activities` - NGO activities
- `galleries` - Gallery images
- `donations` - Donation records
- `volunteers` - Volunteer registrations

### Sample Data (Optional)
```bash
# You can add sample data using MongoDB Compass or:
# Use the admin panel to create initial content
```

---

## 🔌 Testing the API

### 1. Test Backend Health
```bash
curl http://localhost:3000/api/health
# Should return: {"success":true,"message":"Server is running"}
```

### 2. Create Admin Account
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ngo.com",
    "password": "password123"
  }'
```

### 3. Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ngo.com",
    "password": "password123"
  }'
```

### 4. Create Blog (Using token from login)
```bash
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "First Blog",
    "content": "# Hello World",
    "coverImage": "https://via.placeholder.com/800x600"
  }'
```

---

## 🖥️ Admin Panel Access

### Admin Routes
```
🔐 /admin-login          - Login page (public)
📊 /admin                - Dashboard
📝 /admin/blogs          - Blog management
📸 /admin/gallery        - Gallery management
🎯 /admin/activities     - Activity management
💝 /admin/donations      - Donation records
🤝 /admin/volunteers     - Volunteer management
```

### Key Features
✅ No navbar link to admin panel (hidden system)  
✅ Direct access only via /admin-login  
✅ Token-based authentication  
✅ Role-based access control  

---

## 📱 Frontend Pages

```
Public Pages:
/                   - Home
/about              - About Us
/what-we-do         - Services/Activities
/impact             - Impact & Stats
/gallery            - Photo Gallery
/contact            - Contact Form
/donate             - Donate Page
/volunteer          - Volunteer Signup
/blog               - Blog Listing
/blog/:slug         - Individual Blog Post

Private (Admin Only):
/admin              - Admin Dashboard
/admin/blogs        - Manage Blogs
/admin/gallery      - Manage Gallery
/admin/donations    - View Donations
/admin/volunteers   - View Volunteers
```

---

## 🐛 Troubleshooting

### Backend Won't Start
```bash
# Check if port is in use
lsof -ti:3000

# Check if MongoDB is running
mongosh

# Check environment variables
cat .env
```

### MongoDB Connection Error
```bash
# Check MONGODB_URI
# Local: mongodb://localhost:27017/ngo
# Atlas: mongodb+srv://user:pass@cluster.mongodb.net/ngo?retryWrites=true

# Test connection
mongosh "YOUR_URI"
```

### Frontend Can't Connect to Backend
```bash
# Check VITE_API_URL in .env.local
# Check backend is running on port 3000
# Check CORS settings in backend/src/app.js
# Check firewall isn't blocking port 3000
```

### Admin Login Fails
```bash
# Check admin account exists in database
mongosh
use ngo
db.admins.find()

# Verify email and password
# Check JWT_SECRET in .env
```

---

## 🔒 Security Checklist

Before Deploying to Production:

- [ ] Change JWT_SECRET to random 32+ character string
- [ ] Set NODE_ENV to 'production'
- [ ] Configure HTTPS/SSL
- [ ] Update FRONTEND_URL to production domain
- [ ] Setup MongoDB Atlas with authentication
- [ ] Enable CORS for production domain only
- [ ] Setup rate limiting
- [ ] Add input validation on all endpoints
- [ ] Implement request logging
- [ ] Setup error monitoring (Sentry, etc.)
- [ ] Review and test all API endpoints
- [ ] Backup database regularly
- [ ] Setup automated deployments

---

## 📚 Documentation Files

Read these for detailed information:

1. **Backend Documentation** → `backend/BACKEND.md`
   - Project structure
   - Database models
   - All API endpoints
   - Authentication
   - Environment setup

2. **API Documentation** → `backend/API_DOCUMENTATION.md`
   - Detailed endpoint specs
   - Request/Response examples
   - Error codes
   - cURL examples

3. **Frontend Documentation** → `frontend/FRONTEND.md`
   - Frontend structure
   - Components list
   - Pages and routing
   - Configuration

---

## 🚀 Development Workflow

### Daily Workflow
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
pnpm dev

# Visit http://localhost:5173
```

### Before Committing
```bash
# Check frontend
cd frontend
pnpm lint

# Test API endpoints
curl http://localhost:3000/api/health
```

### Building for Production
```bash
# Backend - Ready as-is
# No build required for Node.js

# Frontend - Build static files
cd frontend
pnpm build

# Output in frontend/dist/
# Deploy to hosting (Vercel, Netlify, etc.)
```

---

## 🌐 Deployment

### Backend Deployment Options

#### Heroku
```bash
heroku create your-app-name
git push heroku main
```

#### Railway
```bash
# Connect GitHub repo
# Set environment variables
# Deploy automatically
```

#### AWS/GCP/Azure
```bash
# Setup VM or container
# Install Node.js
# Deploy with PM2 or Docker
```

### Frontend Deployment Options

#### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel
# Set VITE_API_URL to production backend
# Auto-deploy on push
```

#### Netlify
```bash
# Connect GitHub repo
# Build: pnpm build
# Publish: frontend/dist
```

---

## 📞 Support & Resources

### Documentation
- Backend: `backend/BACKEND.md`
- API: `backend/API_DOCUMENTATION.md`
- Frontend: `frontend/FRONTEND.md`

### External Resources
- [Express.js Docs](https://expressjs.com)
- [React Docs](https://react.dev)
- [MongoDB Docs](https://docs.mongodb.com)
- [Vite Docs](https://vitejs.dev)

---

## ✅ Project Ready!

Your NGO project is now complete with:

✅ Full backend REST API  
✅ Admin management panel  
✅ Public website pages  
✅ Authentication system  
✅ Database design  
✅ API documentation  
✅ Setup instructions  

### Next Steps:
1. Customize content for your NGO
2. Add images and branding
3. Setup payment processing (Stripe)
4. Configure email notifications
5. Deploy to production
6. Monitor and maintain

---

**Happy Coding! 🎉**

Made with ❤️ for NGOs

