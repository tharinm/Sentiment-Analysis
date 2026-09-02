from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import predict_sentiment

app = FastAPI(
    title="Sentiment Analysis API",
    description="API for analyzing sentiment of text using Hugging Face Transformers. OpenAPI docs available at /docs.",
    version="1.0.0"
)

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    text: str

class SentimentResponse(BaseModel):
    sentiment: str
    score: float

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Backend is running"}

@app.post("/predict", response_model=SentimentResponse)
def predict(request: SentimentRequest):
    label, score = predict_sentiment(request.text)
    return SentimentResponse(sentiment=label, score=score)
