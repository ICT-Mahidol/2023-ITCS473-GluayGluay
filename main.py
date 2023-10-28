from PyDictionary import PyDictionary
from flask import Flask, render_template, request, Response
from googletrans import Translator
from langdetect import DetectorFactory
from langdetect import detect

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with your own secret key

translator = Translator()
dictionary = PyDictionary()

# Set a higher confidence threshold to avoid false detections
DetectorFactory.seed = 0

@app.route('/words-en.txt')
def word_en():
    with open('words-en.txt', 'r') as file:
        file_content = file.read()
    return Response(file_content, mimetype='text/plain')

@app.route('/words-th.txt')
def word_th():
    with open('words-th.txt', 'r') as file:
        file_content = file.read()
    return Response(file_content, mimetype='text/plain')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/translate', methods=['POST'])
def translate():
    text = request.form['text']
    source_lang = request.form['source_lang']
    target_lang = request.form['target_lang']
    print(text)

    try:
        translation = translator.translate(text, src=source_lang, dest=target_lang)
        translated_text = translation.text
        print("Translated : " + translated_text)

        return translated_text
    except:
        return 'Unknown'



@app.route('/detect-lang', methods=['POST'])
def detect_language():
    text = request.form['text']
    print(text)
    try:
        lang_code = detect(text)
        return lang_code
    except:
        return 'Unknown'


if __name__ == '__main__':
    app.run(debug=True)
