# Real Time Markdown Editor

This project is a simple Markdown Editor with a live preview, built using React for the frontend and Express for the backend. It supports fetching and updating markdown data from the backend server.

## Getting Started

### Backend Setup

1. **Navigate to the backend folder:**

   ```sh
   cd backend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Run the server in development mode::**

   ```sh
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend folder:**

   ```sh
   cd frontend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Run the server in development mode::**

   ```sh
   npm run dev
   ```

# Features

### Markdown Editor:

- Textarea for editing markdown.
- Updates the backend with changes in real-time.

### Markdown Preview:

- Live preview of the markdown.
- Syntax highlighting for code blocks using highlight.js.

# Project Structure

## Backend:

### Dependencies:

- express: Web framework for Node.js.
- cors: Middleware for enabling CORS.
- body-parser: Middleware for parsing JSON bodies.

### Server Setup:

- The server is set up to listen on port 5000.
- CORS and body-parser middlewares are applied to handle cross-origin requests and JSON parsing respectively.

### Endpoints:

- GET /api/markdown: Fetches the current markdown data. If no markdown data is present, it uses an optional defaultMarkdown query parameter to set and return default markdown.
- POST /api/markdown: Updates the markdown data with the data provided in the request body.

## Frontend:

### Dependencies:

- axios: For making HTTP requests.
- react: For building user interfaces.
- markdown-it: For parsing Markdown.
- highlight.js: For syntax highlighting in code blocks.

### Components:

- App: Main component that sets up the editor and preview layout.
- Editor: Component for editing markdown text. It updates the backend with changes.
- Preview: Component for rendering the markdown preview. It uses markdown-it for parsing and highlight.js for syntax highlighting.

### State Management:

- Redux
