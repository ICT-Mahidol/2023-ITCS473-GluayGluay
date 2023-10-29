import requests
from PyDictionary import PyDictionary
from flask import Flask, render_template, request, Response, jsonify, redirect, flash, session, url_for
from googletrans import Translator
from langdetect import DetectorFactory
from langdetect import detect

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user


app = Flask(__name__)
app.secret_key = 'your_secret_key' 

#simple translate
translator = Translator()
dictionary = PyDictionary()
DetectorFactory.seed = 0

#login, register
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://netgluayadmin:netgluay@db4free.net/netgluaydb'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"

class User(db.Model, UserMixin):
    __tablename__ = 'translate_user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    language = db.Column(db.String(10), default='en')  # Language preference (default is 'en')
    phone_number = db.Column(db.String(15), unique=True, nullable=True)  # Phone number (optional)
    color_setting = db.Column(db.String(10), default='light')  # Color setting (default is 'light')

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

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

# Registration route
@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        phone_number = request.form.get('phone_number')

        # Check if the username is already in use
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            flash('Username is already in use. Please choose a different username.', 'danger')
            return redirect(url_for('register'))

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        user = User(username=username, password=hashed_password, language='en', phone_number=phone_number, color_setting='light')
        db.session.add(user)
        db.session.commit()

        flash('Your account has been created!', 'success')
        return redirect(url_for('login'))

    return render_template('register.html')


# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            return redirect(url_for('dashboard'))
        else:
            flash('Login unsuccessful. Please check your username and password.', 'danger')
    return render_template('login.html')

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/dashboard')
@login_required
def dashboard():
    user = current_user
    print(current_user)
    return render_template('dashboard.html', user=user)

@app.route('/change-color-setting', methods=['GET'])
@login_required  # Ensure that the user is logged in to access this route
def change_color_setting():
    new_color_setting = request.args.get('color_setting')

    # Assuming the user is already logged in, you can update the color_setting
    current_user.color_setting = new_color_setting
    db.session.commit()
    flash('Color setting has been updated.', 'success')

    return redirect(url_for('dashboard'))


# Logout route
@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out.', 'success')
    return redirect(url_for('login'))

@app.route('/docs')
def how_to_use():
    return render_template('docs.html')  


if __name__ == '__main__':
    app.run(debug=True)
