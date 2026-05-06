# Centralized Authentication System

Modern full-stack centralized authentication platform built using Spring Boot, React, JWT, PostgreSQL, and Supabase.

This project provides a reusable authentication system similar to Clerk/Auth0 style authentication flows for multiple applications.

---

# Features

- User Signup
- User Login
- JWT Authentication
- Token Verification
- Password Hashing (BCrypt)
- Centralized Authentication Architecture
- Reusable Authentication UI
- Modern Modal-Based Login System
- Protected Route Ready
- Production Deployment Ready
- Multi-Application Authentication Support

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Styling | Tailwind CSS |
| HTTP Client | Axios |
| Backend | Spring Boot |
| Security | Spring Security |
| Authentication | JWT |
| Database | PostgreSQL |
| Cloud Database | Supabase |
| Build Tool | Maven |
| Frontend Build Tool | Vite |

---

# Architecture

```text
Frontend Applications
        ↓
Centralized Authentication Frontend
        ↓
Spring Boot Authentication API
        ↓
Supabase PostgreSQL Database
```

---

# Backend APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/auth/signup | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/verify | Verify JWT |

---

# Authentication Flow

```text
User Clicks Login
        ↓
Authentication Modal Opens
        ↓
Login / Signup Request Sent
        ↓
JWT Token Generated
        ↓
Frontend Stores JWT
        ↓
Protected APIs Accessible
```

---

# Frontend Features

- Login Modal
- Signup Modal
- Slide Animation
- Blur Overlay
- JWT Storage
- Auto Authentication Check
- Responsive Design
- Modern SaaS UI

---

# Backend Features

- Spring Security
- JWT Generation
- JWT Validation
- BCrypt Password Encryption
- Stateless Authentication
- PostgreSQL Integration
- REST APIs
- Production Ready Configuration

---

# Project Structure

## Frontend

```bash
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   └── utils/
```

## Backend

```bash
backend/
├── controller/
├── service/
├── repository/
├── entity/
├── dto/
├── config/
├── security/
└── jwt/
```

---

# Environment Variables

## Frontend (.env)

```env
VITE_API_BASE_URL=http://localhost:8080/api/auth
```

## Backend (application.properties)

```properties
spring.datasource.url=YOUR_SUPABASE_DB_URL
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

jwt.secret=YOUR_SECRET_KEY
jwt.expiration=86400000
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/centralized-auth-system.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Backend Setup

```bash
cd backend
mvn spring-boot:run
```

---

# Production Deployment

| Service | Platform |
|---|---|
| Frontend | Vercel / Netlify |
| Backend | Railway / Render |
| Database | Supabase |

---

# Future Enhancements

- Google OAuth
- GitHub OAuth
- Refresh Tokens
- Forgot Password
- Email Verification
- Role-Based Access Control
- Session Management
- Multi-Tenant Authentication
- SDK Package Support
- Authentication Analytics

---

# Use Case

This project is designed for:

- SaaS platforms
- Multi-application ecosystems
- Centralized identity management
- Authentication microservices
- Production-ready authentication infrastructure

---

# License

MIT License