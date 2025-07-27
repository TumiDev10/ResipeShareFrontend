---
## ✅ FRONTEND: `README.md` (for the `recipe-share-ui` Angular folder)
```markdown
# 🧑‍🍳 RecipeShare Frontend (Angular)
## Overview
This is the frontend UI for RecipeShare, built using **Angular 17** with standalone components. It provides a clean and responsive interface to interact with the RecipeShare API, including viewing, creating, editing, and deleting recipes.
---
## Features
- 📋 List all recipes
- ➕ Add new recipes
- 🖊️ Edit existing recipes
- ❌ Delete recipes
- 🔍 Live search by dietary tag
- ✅ Form validation with error feedback
- 💄 Professional card layout
- 🔁 Back navigation from forms
- 📱 Responsive and modern styling
---
## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
### Setup Instructions
1. Navigate to the UI folder:
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
## License
MIT License
---
## Author
RecipeShare Frontend — Developed by Tumi Mashigo
