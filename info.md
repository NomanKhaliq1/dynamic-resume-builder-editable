# Dynamic Resume Builder - Project Documentation

## 🚀 Project Overview

**Dynamic Resume Builder** is a modern, interactive web application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It allows users to create professional resumes with real-time previews, multiple templates, and extensive customization options.

## ✅ Completed Features (Phase 1-7)

### Core Architecture

- **Next.js Migration**: Fully migrated from vanilla HTML/JS to a robust React-based architecture.
- **TypeScript**: Strictly typed codebase for better reliability and maintainability.
- **Tailwind CSS**: Modern, responsive styling with a premium aesthetic.

### User Experience

- **Wizard Flow**: Step-by-step resume creation process (Details -> Template -> Preview).
- **Split-Screen Live Preview**: Real-time updates as users type, with a side-by-side view on desktop.
- **Responsive Design**: Optimized for both desktop and mobile devices.

### Customization & Templates

- **5 Professional Templates**:
  1.  **Classic Professional**: Traditional serif layout.
  2.  **Modern Minimalist**: Clean sans-serif with sidebar.
  3.  **Creative Bold**: Vibrant headers and modern shapes.
  4.  **Executive Suite**: Authoritative layout with strong hierarchy.
  5.  **Pure Minimal**: Whitespace-focused and elegant.
- **Theme Customization**:
  - **Theme Color**: Full color picker for primary accents.
  - **Text Color**: Custom sidebar text color for contrast.
  - **Icon Color**: Dedicated control for icon uniformity.
- **Profile Image**:
  - Upload functionality.
  - Shape control (Circle, Rounded, Square).
  - Size adjustment slider.
  - _Smart Logic_: Only appears for templates that support images.

## 🚧 Upcoming Features (Roadmap)

### Phase 8: Export & Polish (Current Focus)

- [ ] **PDF Export**: Generate high-quality, ATS-friendly PDFs using `html2canvas` and `jspdf`.

### Phase 9: Advanced Intelligence

- [ ] **AI Integration**: "Fix my grammar" and "Generate Summary" using Gemini/OpenAI APIs.
- [ ] **Smart Suggestions**: Role-based bullet point suggestions.

### Phase 10: User Accounts & Cloud

- [ ] **Authentication**: User signup/login (Supabase/Firebase).
- [ ] **Cloud Save**: Save multiple resumes to the cloud.
- [ ] **Public Sharing**: Unique URLs for sharing resumes (e.g., `resume.com/user`).

## 🛠️ Technical Requirements

### Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Deployment

- **Platform**: Vercel
- **Configuration**: Requires "Next.js" Framework Preset.
