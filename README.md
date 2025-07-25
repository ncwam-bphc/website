Based on the codebase context, you're asking me to write a README for the NCWAM 2025 website project, which is a conference website for the National Conference on Challenges in Welding and Additive Manufacturing. <cite/>

# NCWAM 2025 Conference Website

The official website for the National Conference on Challenges in Welding and Additive Manufacturing (NCWAM 2025), scheduled for February 27-28, 2025 at BITS Pilani, Hyderabad Campus. <cite/>

## Overview

This is a modern web application built with Next.js that serves multiple purposes for the conference: <cite/>
- Public information about the conference (dates, speakers, committee members)
- User registration and paper submission workflows  
- Abstract and manuscript review processes
- Administrative tools for managing the conference

## Technology Stack

The website is built using modern web technologies:

**Frontend:**
- Next.js 15.x with App Router
- React 18.x
- TypeScript
- TailwindCSS for styling
- Radix UI components
- Framer Motion for animations

**Backend & Database:**
- PostgreSQL database
- Drizzle ORM for database operations
- NextAuth.js for authentication
- Nodemailer for email services
- UploadThing for file storage

**Development Tools:**
- ESLint and Prettier for code quality
- Drizzle Kit for database management
- TypeScript for type safety

## Environment Setup

The application uses environment variables for configuration:

Required environment variables include:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Authentication secret
- `EMAIL_SERVER` - Email service configuration
- `UPLOADTHING_TOKEN` - File upload service token
- `WEBHOOK_KEY` - Webhook authentication

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `.env.example` to `.env.local` and configure the required variables

3. **Set up the database:**
   ```bash
   npm run db:push
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio
- `npm run lint` - Run ESLint
- `npm run format:write` - Format code with Prettier

## Key Features

### Public Pages
- Landing page with conference information
- Important dates and deadlines
- Speaker profiles and committee information
- Sponsorship information and current sponsors

### Submission System
The website handles both abstract and manuscript submissions:
- Abstract submission (required)
- Manuscript submission (optional)
- User authentication via email magic links
- File upload capabilities

### Administrative Interface
Admin users can manage submissions through dedicated interfaces:
- Review abstracts and manuscripts
- Assign reviewers
- Track submission statistics
- Send automated email notifications

## Database Schema

The application uses PostgreSQL with tables for:
- User accounts and authentication
- Abstract submissions
- Manuscript submissions
- Reviewer assignments and responses

## Deployment

The project is configured for deployment on Vercel with:
- Automatic VERCEL_URL handling
- Environment variable validation
- Production-ready configuration

## Contributing

1. Follow the existing code style and formatting
2. Run `npm run check` before committing to ensure code quality
3. Use TypeScript for all new code
4. Follow the established component and file structure

## License

This project is private and proprietary to BITS Pilani, Hyderabad Campus for the NCWAM 2025 conference.

## Notes

The project follows the T3 Stack conventions and includes comprehensive type safety with Zod validation for environment variables and form schemas.  The codebase is well-structured with clear separation between public pages, authentication, submission workflows, and administrative functions.

Wiki pages you might want to explore:
- [Overview (ncwam-bphc/website)](https://deepwiki.com/ncwam-bphc/website)
- [Sponsorship Page (ncwam-bphc/website)](https://www.ncwambitshyderabad.com/sponsorship)
