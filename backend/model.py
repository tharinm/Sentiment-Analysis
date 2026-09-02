from transformers import pipeline

print("Loading model 'distilbert-base-uncased-finetuned-sst-2-english'...")
sentiment_pipeline = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)
print("Model loaded successfully.")

def predict_sentiment(text: str):
    """
    Predicts the sentiment of the given text.
    Returns a tuple: (label, confidence_score)
    """
    result = sentiment_pipeline(text)[0]
    return result['label'], result['score']
