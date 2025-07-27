# RecipeShare Frontend
## Overview
This is the frontend for the RecipeShare application built with **Angular 16+** and **standalone components**. It communicates with the ASP.NET Core backend to perform recipe operations and provides a clean, responsive user interface.
---
## Features
- Standalone Angular components
- View all recipes as responsive cards
- Create, edit, and delete recipes
- Filter/search recipes by dietary tag
- Reactive form with validation
- Professional and clean styling
---
## Getting Started
### Prerequisites
- Node.js v16+
- Angular CLI installed globally
- 
### Setup Instructions
1. **Navigate to the frontend:**
   ```bash
   cd recipe-share-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
> 🌐 The app will be available at: `http://localhost:4200`
---
## Project Structure
recipe-share-ui/
├── src/
│   ├── app/
│   │   ├── components/        # List, Form, Search components
│   │   ├── services/          # HTTP service
│   │   ├── models/            # Recipe model
│   │   └── app.config.ts      # API base URL
│   ├── styles.css             # Global styles
│   └── index.html             # Entry pointrecipe-share-ui/
├── src/
│   ├── app/
│   │   ├── components/        # List, Form, Search components
│   │   ├── services/          # HTTP service
│   │   ├── models/            # Recipe model
│   │   └── app.config.ts      # API base URL
│   ├── styles.css             # Global styles
│   └── index.html             # Entry point

---
## Styling & UI
- 🧾 Recipes displayed as modern cards
- 📦 "Add Recipe" button is fixed at the top-right
- 🧭 Edit and Delete buttons are pinned to the bottom of each card
- 🖼️ Forms are center-aligned with labels and validation hints
- 🔙 Back buttons included in add/edit views for easy navigation
---
## API Integration
- All data is pulled from the backend at `https://localhost:5000/api/recipes`
- CORS must be enabled in the backend for local development
---
## Notes
- Ensure the backend is running and accessible before starting the frontend.
- Make sure port configurations don't conflict with other services.
---
## Author
RecipeShare Frontend — Developed by Tumi Mashigo
