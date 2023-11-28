from flask_testing import TestCase
from flask_login import current_user
import sys
import random

sys.path.append("../..")
def import_app_modules():
    try:
        from app.main import app, db, User
        return app, db, User
    except ImportError as e:
        print("Import Error: ", e)
        raise

class MyTest(TestCase):

    def create_app(self):
        app, db, User = import_app_modules()
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://netgluayadmin:netgluay@db4free.net/netgluaydb'
        app.config['TESTING'] = True
        return app

    def setUp(self):
        app, db, User = import_app_modules()
        db.create_all()

    def tearDown(self):
        app, db, User = import_app_modules()
        db.session.remove()
        # db.drop_all()

    # Test Case 1: Ensure the home page is accessible
    # Expected Result: HTTP 200 status and usage of 'index.html'template.
    def test_home_page(self):
        response = self.client.get('/')
        self.assert200(response)
        self.assert_template_used('index.html')

    # Test Case 2: Ensure registration creates a new user
    # [ISP] Partition characteristic and possible values
    # C1 = valid username (is not used)
    # Expected Result: Successful addition of a new user to the database, confirmed by querying the user.
    def test_regis(self):
        app, db, User = import_app_modules()
        random_username = random.randint(1,99999)
        random_phone_suffix = random.randint(100000, 999999)
        response = self.client.post('/register', data=dict(
            username=random_username,
            password="testpass",
            phone_number=f"1111{random_phone_suffix}"
        ), follow_redirects=True)
        user = User.query.filter_by(username=random_username).first()
        self.assertIsNotNone(user)
        self.assertTrue(current_user.is_anonymous)
        self.assert_template_used('login.html')

    # Test Case 3: Ensure registration fails if the username is already in use
    # [ISP continue from TestCase2]
    # C2 = invalid username (already in used)
    # Expected Result: The registration process should not create a new user with the same username
    def test_regis_fail(self):
        app, db, User = import_app_modules()
        random_phone_suffix = random.randint(100000, 999999)
        response = self.client.post('/register', data=dict(
            username="m",
            password="1",
            phone_number=f"1111{random_phone_suffix}"
        ), follow_redirects=True)
        user = User.query.filter_by(username="testuser").first()
        self.assertMessageFlashed('Username is already in use. Please choose a different username.', 'danger')
        self.assert_template_used('register.html')

    # Test Case 4: Ensure Login is successful
    # [ISP] Partition characteristic and possible values
    # C1 = valid Username
    # C2 = valid Password
    # Expected Result: Successful login with HTTP 200 status and authenticated user session.
    def test_login(self):
        with self.client:
            response = self.client.post('/login', data=dict(
                username='m',
                password='1'
            ), follow_redirects=True)
            self.assertEqual(response.status_code, 200)
            self.assertTrue(current_user.is_authenticated)

    # Test Case 5: Ensure Login is unsuccessful
    # [ISP continue from TestCase4]
    # C3 = invalid Username
    # C4 = invalid Password
    # Expected Result: The login process should fail when incorrect credentials (username or password) are provided.
    def test_login_fail(self):
        with self.client:
            response = self.client.post('/login', data=dict(
                username='testuser',
                password='testfail'
            ), follow_redirects=True)
            self.assertEqual(response.status_code, 200)
            self.assertFalse(current_user.is_authenticated)


    # Test Case 6: Test language detection
    # [ISP] Partition characteristic and possible values
    # C1 = text is not empty
    # Expected Result: return the language that match with text
    def test_language_detection(self):
        response = self.client.post('/detect-lang', data=dict(
            text='สวัสดี'
        ))
        self.assert200(response)
        detected_lang = response.data.decode('utf-8')
        self.assertEqual(detected_lang, 'th')

    # Test Case 7: Test language not detection
    # [ISP continue from TestCase6]
    # C2 = text is empty
    # Expected Result: return the 'Unknown' when text is empty
    def test_language_detection_not_found(self):

        # for expected_lang, text_sample in samples.items():
        response = self.client.post('/detect-lang', data=dict(
            text=""
        ))
        self.assert200(response)
        detected_lang = response.data.decode('utf-8')
        self.assertEqual(detected_lang, 'Unknown')

    # Test Case 8: Test translation from English to various languages
    def test_translate(self):
        translations = {
            "th": "สวัสดี",
            "fr": ["Bonjour", "Salut"],
            "es": "Hola",
            "ja": "こんにちは",
            "zh-CN": "你好",
            "zh-TW": "你好",
            "de": "Hallo",
            "it": "Ciao",
            "nl": "Hallo",
            "ru": "Привет",
            "pt": "Olá",
            "ko": "안녕하세요",
            "ar": "مرحبًا"
        }

        source_text = "Hello"
        source_lang = "en"

        for target_lang, expected_translation in translations.items():
            response = self.client.post('/translate', data=dict(
                text=source_text,
                source_lang=source_lang,
                target_lang=target_lang
            ))
            self.assert200(response)
            translated_text = response.data.decode('utf-8')

            if isinstance(expected_translation, list):
                self.assertTrue(translated_text in expected_translation)
            else:
                self.assertEqual(translated_text, expected_translation)

    # Test Case 9: Test Update Profile
    def test_profile_update(self):
        with self.client:
            response = self.client.post('/login', data=dict(
                username='m',
                password='1'
            ), follow_redirects=True)
        new_language = 'en'
        new_phone = '9876543210'
        response = self.client.post('/edit-profile', data=dict(
            phone=new_phone

        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(current_user.phone_number, new_phone)