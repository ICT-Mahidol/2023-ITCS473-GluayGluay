import pytest
from flask_testing import TestCase
from flask_login import current_user
import sys

sys.path.append("..")
try:
    from app.main import app, db, User
except ImportError as e:
    print("Import Error: ", e)


class MyTest(TestCase):

    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://netgluayadmin:netgluay@db4free.net/netgluaydb'
        app.config['TESTING'] = True
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    # Test Case 1: Ensure the home page is accessible
    def test_home_page(self):
        response = self.client.get('/')
        self.assert200(response)
        self.assert_template_used('index.html')

    # Test Case 2: Ensure registration creates a new user
    def test_registration(self):
        response = self.client.post('/register', data=dict(
            username="testuser",
            password="testpass",
            phone_number="1234567890"
        ), follow_redirects=True)
        user = User.query.filter_by(username="testuser").first()
        self.assertIsNotNone(user)
        self.assertTrue(current_user.is_anonymous)
        self.assert_template_used('login.html')

    # Test Case 3: Test language detection
    def test_language_detection(self):
        samples = {
            "en": "Hello, how are you?",
            "th": "สวัสดีครับ คุณสบายดีไหมครับ",
            "es": "Hola, ¿cómo estás?",
            "fr": "Bonjour, comment ça va?",
            "ja": "こんにちは、お元気ですか？",
            "zh-cn": "你好，你好吗？",
            "zh-tw": "您好，今天過得怎麼樣？",
            "de": "Hallo, wie geht's?",
            "it": "Ciao, come stai?",
            "nl": "Hallo, hoe gaat het?",
            "ru": "Привет, как ты?",
            "pt": "Olá, como você está?",
            "ko": "안녕하세요, 어떻게 지내세요?",
            "ar": "مرحبا، كيف حالك؟"
        }

        for expected_lang, text_sample in samples.items():
            response = self.client.post('/detect-lang', data=dict(
                text=text_sample
            ))
            self.assert200(response)
            detected_lang = response.data.decode('utf-8')
            self.assertEqual(detected_lang, expected_lang)

    # Test Case 4: Test translation from English to various languages
    def test_translation_to_various_languages(self):
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


if __name__ == '__main__':
    pytest.main(['-v', 'Unit_Test.py'])