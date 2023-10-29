import requests
from PyDictionary import PyDictionary
from flask import Flask, render_template, request, Response, jsonify
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
    
@app.route('/dictionary')
def dictionary():
    with open('words-en.txt', 'r') as file:
        word_options = file.read().splitlines()  # Change the file path as needed
    return render_template('dictionary.html', word_options=word_options)

@app.route('/lookup-word/<word>', methods=['GET'])
def lookup_word(word):
    url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define"
    querystring = {"term": word}
    headers = {
        "X-RapidAPI-Key": "b4d041fd73mshbbdd415ae5ff3b8p119786jsn1c0d3093630d",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }

    try:
        response = requests.get(url, headers=headers, params=querystring)
        if response.status_code == 200:
            data = response.json()
            definitions = []
            for definition in data['list']:
                definitions.append({
                    'definition': definition['definition'],
                    'example': definition['example']
                })
            return render_template('definitions.html', word=word, definitions=definitions)
        return "No words"
    except Exception as e:
        return jsonify({'error': 'Unknown'})


if __name__ == '__main__':
    app.run(debug=True)
