# Full-Stack Sentiment Analysis App

A full-stack application built with React, Tailwind CSS v4, FastAPI, and Hugging Face Transformers to perform sentiment analysis on text. 
The backend utilizes the `distilbert-base-uncased-finetuned-sst-2-english` model to determine if the text is POSITIVE or NEGATIVE.

## Architecture

- **Backend**: Python 3, FastAPI, Uvicorn, Hugging Face `transformers`, PyTorch. Exposes a `/predict` endpoint and automatic OpenAPI docs.
- **Frontend**: React 18, Vite, Tailwind CSS v4. A modern, minimalist glassmorphism UI.

## Getting Started

### Backend Setup

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. (Optional but recommended) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows: venv\Scripts\activate
   # macOS/Linux: source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI development server:
   ```bash
   uvicorn main:app --reload
   ```
   > The server will start on `http://127.0.0.1:8000`. First run might take a minute to download the Hugging Face model.
   > OpenAPI documentation will be available at `http://127.0.0.1:8000/docs`.

### Frontend Setup

1. Open a separate terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   > The app will be available at `http://localhost:5173`.

## Direct API Testing

You can bypass the frontend and test the backend directly using `curl`:

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
     -H "Content-Type: application/json" \
     -d "{\"text\": \"This application is absolutely amazing!\"}"
```

**Expected Response**:
```json
{
  "sentiment": "POSITIVE",
  "score": 0.9998
}
```
