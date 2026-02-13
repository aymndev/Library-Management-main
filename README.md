# Library Management System

A modern, full-featured library management system built with Next.js 16, React 19, and TypeScript. This application provides an intuitive interface for managing books, users, and library operations with role-based access control.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

## Features

- **Authentication System** - Secure login with role-based access (Admin & User)
- **Book Management** - Browse, search, and manage library books
- **User Management** - Admin dashboard for user administration
- **Modern UI/UX** - Beautiful, responsive design with custom fonts
- **Dark Mode Support** - Automatic theme switching based on system preferences
- **Fast Performance** - Built with Next.js App Router for optimal speed
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Credentials

**Admin Access:**
- Email: `admin@gmail.com`
- Password: `admin123`

**User Access:**
- Email: `user@gmail.com`
- Password: `user123`

## Tech Stack

### Core Technologies
- **Framework:** [Next.js 16.1.6](https://nextjs.org/) (App Router)
- **UI Library:** [React 19.2.3](https://react.dev/)
- **Language:** [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/)

### Additional Libraries
- **Icons:** [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
- **Fonts:** Google Fonts (Arimo, Bebas Neue, Montserrat, Noto Sans)

### Development Tools
- **Linting:** ESLint with Next.js config
- **PostCSS:** Tailwind CSS processing
- **Type Checking:** TypeScript strict mode

## Project Structure

```
my-app/
├── app/
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   ├── dashboard/      # Admin dashboard
│   ├── books/          # Books browsing page
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/
│   ├── books.jpg       # Login page background
│   ├── background.jpg  # Additional assets
│   └── back.avif       # Additional assets
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind config
└── next.config.ts      # Next.js config
```

## Typography

The project uses a carefully selected font stack:

- **Arimo** - Body text and general content
- **Bebas Neue** - Headings and display text
- **Montserrat** - UI elements and buttons
- **Noto Sans** - Default fallback font

Access fonts in your components:
```tsx
<h1 className="font-bebas">Heading</h1>
<p className="font-arimo">Body text</p>
<button className="font-montserrat">Button</button>
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Authentication Flow

1. User navigates to `/login`
2. Enters credentials (email & password)
3. System validates credentials
4. **Admin users** - Redirected to `/dashboard`
5. **Regular users** - Redirected to `/books`
6. Invalid credentials - Error alert

## Roadmap

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Book CRUD operations
- [ ] Advanced search and filtering
- [ ] Book borrowing system
- [ ] Due date notifications
- [ ] User profile management
- [ ] Book reviews and ratings
- [ ] Analytics dashboard
- [ ] Export reports (PDF/Excel)
- [ ] Email notifications

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Built with Next.js and React

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/)

---

**Note:** This is a development project. For production use, implement proper authentication, database integration, and security measures.
