# NGO Website - Complete Full-Stack Project

> A production-ready full-stack NGO website with admin panel, blog system, donation tracking, and volunteer management.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Documentation](#documentation)
- [Deployment](#deployment)

---

## 🎯 Project Overview

This is a complete NGO website solution featuring:

**Frontend** - Modern React TypeScript application with 40+ UI components
**Backend** - Node.js Express REST API with MongoDB database
**Admin Panel** - Hidden admin dashboard for managing content
**Public Website** - Showcase pages for blog, gallery, activities, donations, and volunteers

### Architecture
```
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│   Frontend  │ ◄────► │   Backend    │ ◄────► │   MongoDB    │
│   (React)   │  REST  │  (Express)   │  ODM   │  (Database)  │
└─────────────┘        └──────────────┘        └──────────────┘
      ↓
  Public Pages + Admin Panel
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI Framework
- **TypeScript 5.5** - Type Safety
- **Tailwind CSS 3.4** - Styling
- **Vite 5.4** - Build Tool
- **Shadcn/ui** - Pre-built Components (40+)
- **React Router 6.30** - Routing
- **Axios 1.6** - HTTP Client
- **React Query 5.56** - State Management

### Backend
- **Node.js 18+** - Runtime
- **Express 4.18** - Web Framework
- **MongoDB 7.5** - Database
- **Mongoose 7.5** - ODM
- **JWT 9.0** - Authentication
- **Bcrypt 2.4** - Password Hashing
- **Cloudinary 1.40** - Image Storage

### DevOps
- **Vercel** - Frontend Deployment
- **Heroku/Railway** - Backend Deployment
- **MongoDB Atlas** - Cloud Database

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- pnpm or npm

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and secrets
npm run dev
```

Server runs on `http://localhost:3000`

### 2. Frontend Setup
```bash
cd frontend
pnpm install
echo "VITE_API_URL=http://localhost:3000/api" > .env.local
pnpm dev
```

App runs on `http://localhost:5173`

### 3. Create Admin Account
```bash
# Using API
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@ngo.com","password":"password123"}'
```

### 4. Access Admin Panel
Navigate to `http://localhost:5173/admin-login`

---

## 📁 Project Structure

```
NGO2/
├── backend/                          # Node.js Express API
│   ├── src/
│   │   ├── controllers/              # Business logic
│   │   ├── models/                   # MongoDB schemas
│   │   ├── routes/                   # API endpoints
│   │   ├── middleware/               # Auth & error handling
│   │   ├── services/                 # External services
│   │   ├── config/                   # Database config
│   │   ├── utils/                    # Helper functions
│   │   ├── app.js                    # Express setup
│   │   └── server.js                 # Entry point
│   ├── .env.example                  # Environment template
│   ├── package.json
│   ├── BACKEND.md                    # Backend documentation
│   └── API_DOCUMENTATION.md          # API specs
│
├── frontend/                         # React TypeScript App
│   ├── src/
│   │   ├── components/               # React components
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/                   # Shadcn components
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── About.tsx
│   │   │   ├── Donate.tsx
│   │   │   ├── Volunteer.tsx
│   │   │   └── blog/
│   │   │
│   │   ├── admin/                    # Admin panel
│   │   │   ├── pages/
│   │   │   │   ├── AdminLogin.tsx
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Blogs.tsx
│   │   │   │   ├── Donations.tsx
│   │   │   │   └── Volunteers.tsx
│   │   │   ├── components/
│   │   │   │   ├── AdminLayout.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Topbar.tsx
│   │   │   │   └── StatCard.tsx
│   │   │   ├── services/
│   │   │   ├── hooks/
│   │   │   └── routes.tsx
│   │   │
│   │   ├── lib/                      # Utilities
│   │   ├── hooks/                    # Custom hooks
│   │   └── App.tsx
│   │
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── FRONTEND.md                   # Frontend documentation
│   └── index.html
│
└── SETUP_GUIDE.md                    # Complete setup instructions
```

---

## ✨ Key Features

### 🌐 Public Website
- **Homepage** - Eye-catching landing page
- **About Page** - NGO information
- **Services/Activities** - What the NGO does
- **Impact Dashboard** - Statistics and achievements
- **Photo Gallery** - Image showcase
- **Blog System** - Articles and stories
- **Contact Form** - Get in touch
- **Donate Page** - Make donations
- **Volunteer Signup** - Join the cause

### 🔐 Admin Panel (Hidden)
- **Dashboard** - Quick overview and stats
- **Blog Management** - Create, edit, delete posts
- **Activity Management** - Manage events
- **Gallery Management** - Upload images
- **Donation Tracker** - View all donations
- **Volunteer Management** - Manage registrations

### 🔑 Core Features
- ✅ **JWT Authentication** - Secure admin access
- ✅ **Blog with Markdown** - Content management
- ✅ **Image Uploads** - Via Cloudinary
- ✅ **Payment Integration** - Stripe ready
- ✅ **Email Notifications** - Contact forms
- ✅ **Responsive Design** - Mobile friendly
- ✅ **Dark Mode** - Theme switching
- ✅ **Form Validation** - Zod schemas
- ✅ **Database Indexing** - Fast queries
- ✅ **Error Handling** - Graceful failures

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register      # Create admin account
POST   /api/auth/login         # Login admin
GET    /api/auth/me            # Get current admin
```

### Blogs
```
POST   /api/blog               # Create blog
GET    /api/blog               # Get all blogs
GET    /api/blog/:slug         # Get blog by slug
PUT    /api/blog/:id           # Update blog
DELETE /api/blog/:id           # Delete blog
```

### Activities
```
POST   /api/activity           # Create activity
GET    /api/activity           # Get all activities
DELETE /api/activity/:id       # Delete activity
```

### Gallery
```
POST   /api/gallery            # Upload image
GET    /api/gallery            # Get all images
DELETE /api/gallery/:id        # Delete image
```

### Donations
```
POST   /api/donate             # Create donation
GET    /api/donate             # Get all donations (admin)
GET    /api/donate/stats       # Get stats (admin)
```

### Volunteers
```
POST   /api/volunteer          # Register volunteer
GET    /api/volunteer          # Get all volunteers (admin)
GET    /api/volunteer/stats    # Get stats (admin)
```

---

## 📚 Documentation

### Setup & Installation
See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete setup instructions

### Backend
See [backend/BACKEND.md](./backend/BACKEND.md) for:
- Database models
- Configuration
- Middleware
- Security features

### API Reference
See [backend/API_DOCUMENTATION.md](./backend/API_DOCUMENTATION.md) for:
- Detailed endpoint specs
- Request/response examples
- Error codes
- cURL examples

### Frontend
See [frontend/FRONTEND.md](./frontend/FRONTEND.md) for:
- Component library
- Pages and routing
- Configuration files
- Development tips

---

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Connect GitHub repo to Vercel
# Set environment variables
# Auto-deploy on push
```

### Backend Deployment (Heroku)
```bash
heroku create your-app-name
git push heroku main
```

See SETUP_GUIDE.md for detailed deployment instructions.

---

## 🔐 Security

The project follows security best practices:

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ CORS configuration
- ✅ Input validation
- ✅ Error handling
- ✅ Environment variables
- ✅ Protected admin routes
- ✅ Database indexes
- ✅ Rate limiting ready
- ✅ HTTPS in production

---

## 📊 Database Models

```
Admin
├── email (unique)
├── password (hashed)
└── timestamps

Blog
├── title
├── slug (auto-generated)
├── content
├── coverImage
└── timestamps

Activity
├── title
├── description
├── category
├── images[]
└── timestamps

Gallery
├── imageUrl
├── title
└── timestamps

Donation
├── name
├── amount
├── paymentId (Stripe)
├── status
└── timestamps

Volunteer
├── name
├── email
├── phone
├── interest[]
└── timestamps
```

---

## 🛠️ Development

### Start Both Services
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && pnpm dev
```

### Run Linting
```bash
cd frontend
pnpm lint
```

### Build for Production
```bash
# Frontend
cd frontend
pnpm build

# Output: frontend/dist/
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## ⚠️ Important Rules

```
❌ NO Hardcoded Data - Use database
❌ NO API without Auth - Protect admin routes
❌ NO Mixed Logic - Separate concerns
❌ NO Local Storage - Use Cloudinary

✅ Clean Code - Modular & readable
✅ Security First - Validate input
✅ Database Indexed - Fast queries
✅ Error Handling - Graceful failures
```

---

## 📞 Support

- Check documentation files
- Review API examples
- Test with Postman/cURL
- Read error messages carefully

---

## 📄 License

This project is part of the NGO website initiative.

---

## 🎉 Ready to Use!

Your complete NGO website is ready for:

✅ Local development  
✅ Production deployment  
✅ Team collaboration  
✅ Content management  
✅ Donor tracking  
✅ Volunteer management  

**Start building your NGO's digital presence today!**

---

**Made with ❤️ for NGOs Worldwide**

Last Updated: April 27, 2026

