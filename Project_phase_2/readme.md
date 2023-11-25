# 🌐🐈 **GluayGluay 🍌: Testing for Jelly-Translator: Translation Web App** 🪼

![Coverage](./Project_phase_2/tests/Unit_Test_Cases/coverage.svg)
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
## 🧪 **Unit Testing**

### Overview
Our Jelly Translator web app includes a robust unit testing framework designed to ensure the highest quality and reliability of our application. These tests rigorously validate various functionalities, from user authentication to core translation features, safeguarding the integrity and performance of our app.

### Test Environment Setup
To run these unit tests, make sure you have the following setup:
- Python environment with the necessary dependencies installed.
- Access to the application's codebase and a MySQL database configured as specified in the application settings.

### Running the Tests
Execute the unit tests by navigating to the root directory of the project and running the following command:
```bash
cd Project_phase_2/tests/Unit\ Test\ Cases/
pytest Unit_Test.py
```

This command initiates all unit tests, providing verbose output for each test case, including pass/fail status.

### 📝 Test Cases Summary

#### 1. Home Page Accessibility
**Purpose:** ✅ Tests if the home page is accessible and ensures the correct template is rendered.
- **Method:** `test_home_page`
- **Expected Result:** HTTP 200 status and usage of 'index.html' template.

#### 2. User Registration
**Purpose:** ✅ Verifies the user registration process, creating a new user with randomly generated credentials.
- **Method:** `test_registration`
- **Expected Result:** Successful addition of a new user to the database, confirmed by querying the user.

#### 3. User Login
**Purpose:** ✅ Ensures successful user login with valid credentials and proper session management.
- **Method:** `test_login`
- **Expected Result:** Successful login with HTTP 200 status and authenticated user session.

#### 4. Language Detection
**Purpose:** ✅ Tests the accuracy of language detection for various language inputs.
- **Method:** `test_language_detection`
- **Expected Result:** Correct detection of the language for each provided text sample.

#### 5. Translation Functionality
**Purpose:** ✅ Checks the translation feature for different language pairs, ensuring accurate translations.
- **Method:** `test_translation_to_various_languages`
- **Expected Result:** Correct translation of a given text into various target languages.

#### 6. Profile Update
**Purpose:** ✅ Validates the functionality of updating user profiles.
- **Method:** `test_profile_update`
- **Expected Result:** Successful update of the user's phone number and other profile details.

#### 🎯 Test Report
After running your unit tests, the test framework generates a report that includes statement coverage and branch coverage metrics. Here's how to calculate the overall coverage:

#### 📊 Calculating Statement Coverage:

Statement Coverage = (Number of statements executed / Total number of statements) * 100% 🧮

#### 🌉 Calculating Branch Coverage:

Branch Coverage = (Number of branches executed / Total number of branches) * 100% 🌳

The report shows:

- 📝 Total Statements: 245
- ❌ Total Missed Statements: 61
- 🔀 Total Branches: 48
- 🚫 Total Missed Branches: 12

Then the Statement Coverage would be:

Statement Coverage = ((245 - 61) / 245) * 100% = **75.1%** ✅

And the Branch Coverage would be:

Branch Coverage = ((48 - 12) / 48) * 100% = **75%** ✅

![Test Report](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/blob/master/Project_phase_2/tests/Report/Unit_Report.png)

--------------

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

### 📝 Test Cases Summary

#### 1. User Registration Test
**Purpose:** ✅ Verifies the functionality of the user registration process.

**Procedure:**
- 🌐 Opens the registration page.
- 🆕 Generates random credentials for a new user.
- 📝 Fills the registration form with these credentials.
- 🔍 Submits the form.
- ✔️ Verifies successful registration by checking for a confirmation message.

#### 2. User Login Test
**Purpose:** ✅ Ensures that users can log in with valid credentials.

**Procedure:**
- 🌐 Navigates to the login page.
- 🔑 Inputs the test user's credentials.
- 🔍 Submits the login form.
- ✔️ Confirms successful login by verifying the presence of a dashboard welcome message.

#### 3. Translate Text In Different Languages
**Purpose:** ✅ Checks the accuracy of translations for multiple language pairs.

**Procedure:**
- 🌍 Performs translations between various language pairs like English to Spanish, Thai, French, etc.
- 🔎 Compares the translated output with expected results for accuracy.

#### 4. Docs Page Test
**Purpose:** ✅ Confirms that the documentation page is accessible and displays the correct content.

**Procedure:**
- 🌐 Opens the documentation page.
- 🔍 Verifies the presence of specific content related to the app's documentation.

#### 5. Verify Download, Copy, And Swap Button Functionality
**Purpose:** ✅ Tests the functionality of the download, copy, and language swap features on the translation page.

**Procedure:**
- 🌐 Sets initial languages for translation.
- 🔁 Enters text for translation and swaps languages.
- 🔎 Verifies the swap.
- 📋 Inputs and translates text, then copies the translated text.
- 💾 Verifies the ability to download translated text.

#### 6. Dictionary Page Word Search
**Purpose:** ✅ Verifies the dictionary search functionality for various words.

**Procedure:**
- 🌐 Opens the dictionary page.
- 🔍 Searches for specific words.
- ✔️ Confirms that the search results are correct and relevant.

#### 7. Full User Scenario Test
**Purpose:** ✅ Simulates a full user scenario including login, translation, and theme change.

**Procedure:**
- 🔑 Logs in with a test user.
- 🔄 Generates and sets random user credentials and preferences.
- 📝 Edits user information and changes the app theme.
- 🌐 Performs a word translation and verifies it.
- 🔚 Logs out of the application.

These tests ensure the reliability and functionality of key features in the Jelly Translator web app, providing a smooth experience for users.

#### 🎯 Test Report

![Test Report](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/blob/master/Project_phase_2/tests/Report/UI_REPORT.png)
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
