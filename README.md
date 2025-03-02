# Docify

Docify is a feature-rich full-stack document editing application inspired by Google Docs. It includes real-time collaboration, comments, threads, an advanced TipTap editor, custom extensions, templates, and much more.

## Key Features

- 📝 **Rich Text Editor**
- 🤝 **Real-time Collaboration & Database**
- 💭 **Comments and Mentions**
- 🔔 **Notifications System**
- 📑 **Document Templates**
- 📋 **Copy and Paste Formatting**
- ↩️ **Undo/Redo History**
- 📊 **Table Support**
- 🖼️ **Image Uploads**
- 📏 **Margin Controls**
- ⬇️ **Export (PDF, HTML, TXT, JSON)**
- 👥 **User Profiles**
- 🏢 **Organization Workspaces**
- ✉️ **Organization Invites**
- 🔒 **Authentication**
- 📱 **Responsive Design**
- 🎯 **Cursor Tracking**
- 🎨 **Text Formatting Tools**
- 📝 **Lists and Checklists**
- 🔗 **Link Embedding**
- ⚛️ **Framework:** Next.js 15
- 🎨 **UI:** Shadcn UI & Tailwind CSS

## Live Demo

Check out the live version of Docify here: [Docify](https://docify007.vercel.app/)

## Installation Guide

### Steps to Install and Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/bhavith007/Docify.git
   cd docify
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables** Create a `.env.local` file in the root directory and add the required environment variables:

   ```env
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   LIVEBLOCKS_SECRET_KEY=
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Start the Convex**

   ```bash
   npx convex dev
   ```

Made with ❤️ by Bhavith.

