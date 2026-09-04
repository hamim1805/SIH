import warnings
from flask import Flask, render_template, request, jsonify
from google import genai
from google.genai import types

warnings.filterwarnings("ignore")

app = Flask(__name__) 

client = genai.Client()
chat = client.chats.create(
    model="gemini-3.6-flash",
    config=types.GenerateContentConfig(
        system_instruction="give it lines wisely and concisely, and make it sound like a human being",
    )
)
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def send_chat():
    data = request.get_json()
    user_message = data.get("message", "")
    
    if not user_message:
        return jsonify({"response": "Please enter a message."})
    systemoutput = chat.send_message(user_message)
    return jsonify({"response": systemoutput.text})

if __name__ == "__main__":
    app.run(debug=True)