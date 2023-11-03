---

# 🌐🐈 **GluayGluay 🍌: Testing for Jelly-Translator: Translation Web App** 🪼

### 👉 [Live View Project](https://jellytranslator.siranuta13.repl.co/) 🪼

## 🎓 **ITCS473 - Software Quality Assurance and Testing**
### 🏫 **Mahidol University, ICT**

---

## 🌟 **Overview**

The **Translation Web App** is a user-friendly 🖥️ web application that empowers users to effortlessly translate languages 🌐, explore dictionaries 📖, and personalize their experience 🎨. Catering to both guests 👥 and registered users 📝, it aims to deliver seamless translations and a rich user experience.

---

## 🚀 **Features**

- **🌐 Translation:** Seamlessly translate text between languages using the Google Translate API.
- **📝 User Registration:** Register with a unique username to unlock additional features.
- **🔐 User Login:** Securely log in with password hashing.
- **🎨 Personalization:** Tailor the web app to your liking with theme selection and language preferences.
- **🕰️ Translation History:** Registered users can track their translation history, while guests can translate without saving history.
- **📖 Dictionary:** Delve into word meanings with a dedicated dictionary feature.

---

## 💻 **Installation**

1. **🔗 Clone the repository** or download the source code.
2. **📦 Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **🔄 Update Google Translate library:**

    ```bash
    pip install googletrans==4.0.0rc1
    ```

4. **🗄️ Install MySQL database driver:**

    ```bash
    pip install pymysql
    ```

5. **🛠️ Update the Werkzeug library:**

    ```bash
    pip uninstall werkzeug
    pip install werkzeug==2.3.0
    ```

6. **🔄 Change the database URL in `main.py`:**

    ```python
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@host/database'
    ```

7. **🚀 Start the application:**

    ```bash
    python app.py
    ```

8. **🌐 Access the web app** through your web browser.

---

## 📘 **Usage**

1. **👥 As a Guest:**
   - Perform translations and explore word meanings without logging in.

2. **📝 As a Registered User:**
   - Register, log in, save your translation history, and personalize your experience.

---

## 🤝 **Contributing**

Contributions are welcome! 🌟 Please follow these steps:

1. **🍴 Fork the repository.**
2. **🌿 Create a new branch** for your feature or bug fix.
3. **💻 Make your changes** and commit them.
4. **🔄 Create a pull request**.

---

## ❗ **Issues**

Encounter any issues or have suggestions? **🛠️ Create a new issue** on this repository.

---

## 📜 **License**

This project is licensed under the **MIT License** 🏛️. See the [LICENSE](LICENSE) file for more details.

---
