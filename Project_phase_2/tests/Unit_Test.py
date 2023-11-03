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
        response = self.client.post('/detect-lang', data=dict(
            text="Bonjour"
        ))
        self.assert200(response)
        self.assertEqual(response.data.decode('utf-8'), 'fr')


if __name__ == '__main__':
    pytest.main(['-v', 'Unit_Test.py'])
