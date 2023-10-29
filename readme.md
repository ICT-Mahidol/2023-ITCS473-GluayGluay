# Translation Web App

## Overview

The **Translation Web App** is a user-friendly web application that allows users to perform language translations, access a dictionary, and personalize their experience by customizing themes and language preferences. This application is designed to serve both guests and registered users.

## Features

- **Translation:** Translate text from one language to another with support for various languages using the Google Translate API.
- **User Registration:** Register an account to access additional features. Register with a unique username.
- **User Login:** Log in to your account with secure password hashing.
- **Personalization:** Customize the web app with theme selection and preferred language settings.
- **Translation History:** For registered users, view a history of your translations, including timestamps. For guest users, perform translations without saving a history.
- **Dictionary:** Explore word meanings with a dedicated dictionary feature.

## Installation

1. **Clone the repository** or download the source code.

2. Install required Python libraries and dependencies:
```pip install -r requirements.txt``

3. Update Google Translate library:
```pip install googletrans==4.0.0rc1```

4. Install MySQL database driver:
```pip install pymysql```

5. Update the Werkzeug library:
```pip uninstall werkzeug```
```pip install werkzeug==2.3.0```

6. Change the database url on main.py:
```app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@host/database'```

7. Start the application:
```python app.py```

8. Access the web app through a web browser.

## Usage

1. **As a Guest:**

   - Access the translation page to perform translations without a login.
   - Use the dictionary page to explore word meanings.

2. **As a Registered User:**

   - Register an account or log in with your existing credentials.
   - Access the translation page to perform translations and save your history.
   - Customize your web app by selecting themes and setting your preferred language.

## Contributing

Contributions to this project are welcome. Please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and commit them.
4. **Create a pull request**.

## Issues

If you encounter any issues or have suggestions for improvements, please **create a new issue** on this repository.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.







