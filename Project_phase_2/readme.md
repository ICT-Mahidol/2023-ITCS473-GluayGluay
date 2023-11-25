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

6. **🚀 Start the application:**

    ```bash
    python main.py
    ```

7. **🌐 Access the web app** through your web browser.

---

## 📘 **Usage**

1. **👥 As a Guest:**
   - Perform translations and explore word meanings without logging in.

2. **📝 As a Registered User:**
   - Register, log in, save your translation history, and personalize your experience.

---

## 🔍 **Automated UI Testing**

### Overview
Our web application includes a comprehensive suite of Automated UI Tests to ensure the highest quality of user experience and functionality. These tests are built using the SeleniumLibrary and Robot Framework, providing robust and repeatable test scenarios. They cover a wide range of functionalities including user registration, login, language translation, and dictionary usage.

### Test Environment Setup
To run these tests, you need to have the following setup:
- SeleniumLibrary and Robot Framework installed.
- A supported web browser (tests are configured for Chrome).
- Access to the live version of the web app or a local deployment.

### Running the Tests
To execute the tests, navigate to the test directory and run the following command:
```bash
robot -d results tests/
```
This will run all the test cases and generate a report in the results directory.

### Test Cases Summary

The test suite includes the following key scenarios:

- User Registration Test: Verifies that the user registration process is functional.
- User Login Test: Checks if a user can log in with valid credentials.
- Translate Text In Different Languages: Ensures the accuracy of translations for multiple language pairs.
- Docs Page Test: Confirms that the documentation page is accessible and displays the correct content.
- Verify Download, Copy, And Swap Button Functionality: Tests the download, copy, and language swap features.
- Dictionary Page Word Search: Verifies the dictionary search functionality.
- Full User Scenario Test: Simulates a full user scenario including login, translation, and theme change.

These tests help maintain the reliability and efficiency of the web application, ensuring a seamless experience for all users.
------
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
