# 🌐🐈 **GluayGluay 🍌: Testing for Jelly-Translator: Translation Web App** 🪼
[![Robot Framework UI Tests](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/actions/workflows/robot.yml/badge.svg?branch=master)](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/actions/workflows/robot.yml)
![Pytest Unit Tests](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/actions/workflows/Unit_Tests.yml/badge.svg?branch=master)
![Coverage](./tests/Unit_Test_Cases/coverage.svg)
### 👉 [Live View Project](https://jellytranslator.siranuta13.repl.co/) 🪼

## 🎓 **ITCS473 - Software Quality Assurance and Testing**
### 🏫 **Mahidol University, ICT**
---
## Table of Contents
1. [Overview](#-overview)
2. [Features](#-features)
3. [Installation](#-installation)
4. [Usage](#-usage)
5. [Installation for Testing](#-installation-for-testing)
6. [Unit Testing](#-unit-testing)
    - [Overview](#overview)
    - [Test Environment Setup](#test-environment-setup)
    - [Running the Tests](#running-the-tests)
    - [Test Cases Summary](#-test-cases-summary)
    - [Test Report](#-test-report)
7. [System Testing](#system-testing)
    - [Manual System Test Cases](#manual-system-test-cases)
    - [Requirements Traceability Matrix (RTM)](#requirements-traceability-matrix-rtm)
8. [Automated UI Testing](#-automated-ui-testing)
    - [Overview](#overview-1)
    - [Test Environment Setup](#test-environment-setup-1)
    - [Running the Tests](#running-the-tests-1)
    - [Test Cases Summary](#-test-cases-summary-1)
    - [Test Report](#-test-report-1)
9. [Contributing](#-contributing)
10. [Issues](#-issues)
11. [License](#-license)
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
## 💻 **Installation For Testing**

1. **🔗 Clone the repository** or download the source code.
2. **📦 Install dependencies:**

    ```bash
    pip install -r test_requirements.txt
    ```

3. **🚀 Start testing the application:**
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
- **ISP:** N/A (No specific input partitioning applicable)

#### 2. User Registration
**Purpose:** ✅ Verifies the user registration process, creating a new user with randomly generated credentials.
- **Method:** `test_registration`
- **Expected Result:** Successful addition of a new user to the database, confirmed by querying the user.
- **ISP:** C1 = valid username (not already used)

#### 3. User Registration Fail
**Purpose:** ✅ Ensure registration fails if the username is already in use.
- **Method:** `test_regis_fail`
- **Expected Result:** The registration process should not create a new user with the same username.
- **ISP:** C2 = invalid username (already in use)

#### 4. User Login
**Purpose:** ✅ Ensures successful user login with valid credentials and proper session management.
- **Method:** `test_login`
- **Expected Result:** Successful login with HTTP 200 status and authenticated user session.
- **ISP:** C1 = valid Username; C2 = valid Password

#### 5. User Login Fail
**Purpose:** ✅ Ensure Login is unsuccessful with invalid credentials.
- **Method:** `test_login_fail`
- **Expected Result:** The login process should fail when incorrect credentials (username or password) are provided.
- **ISP:** C3 = invalid Username; C4 = invalid Password

#### 6. Language Detection
**Purpose:** ✅ Tests the accuracy of language detection for various language inputs.
- **Method:** `test_language_detection`
- **Expected Result:** Return the language that matches the text.
- **ISP:** C1 = text is not empty

#### 7. Language Detection Not Found
**Purpose:** ✅ Tests the response when no language can be detected due to empty input.
- **Method:** `test_language_detection_not_found`
- **Expected Result:** Return the 'Unknown' when text is empty.
- **ISP:** C2 = text is empty

#### 8. Translation Functionality
**Purpose:** ✅ Checks the translation feature for different language pairs, ensuring accurate translations.
- **Method:** `test_translation_to_various_languages`
- **Expected Result:** Correct translation of a given text into various target languages.
- **ISP:** N/A (No specific input partitioning applicable)

#### 9. Profile Update
**Purpose:** ✅ Validates the functionality of updating user profiles.
- **Method:** `test_profile_update`
- **Expected Result:** Successful update of the user's phone number and other profile details.
- **ISP:** N/A (No specific input partitioning applicable)

#### 🎯 Test Report
After running your unit tests, the test framework generates a report that includes statement coverage and branch coverage metrics. Here's how to calculate the overall coverage:

#### 📊 Calculating Statement Coverage:

Statement Coverage = (Number of statements executed / Total number of statements) * 100% 🧮

#### 🌉 Calculating Branch Coverage:

Branch Coverage = (Number of branches executed / Total number of branches) * 100% 🌳

The report shows:

- 📝 Total Statements: 262
- ❌ Total Missed Statements: 51
- 🔀 Total Branches: 46
- 🚫 Total Missed Branches: 9

Then the Statement Coverage would be:

Statement Coverage = ((262 - 51) / 262) * 100% = **80.5%** ✅

And the Branch Coverage would be:

Branch Coverage = ((46 - 9) / 46) * 100% = **80.4%** ✅

![Test Report](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/blob/master/Project_phase_2/tests/Report/Unit_Report.png)

--------------
## **System Testing**

### Manual System Test Cases
![PDF File](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/blob/master/Project_phase_2/tests/Manual_Test_Cases/System_Testing.pdf)

#### Test Case 1: User Registration Test ✅
| Test Scenario ID | Test Case ID | Test Case Description                                       | Test Priority | Pre-Requisite |
| ---------------- | -------------|-------------------------------------------------------------| ----          |---------------|
| Register_1       | TC01         | Verifies the functionality of the user registration process | High          | User access to the website.|

| Step No. | Action          | Input                       | Expected Result                             | Actual Result                               | Test Result | Test Comment |
|----------|-----------------|-----------------------------|--------------------------------------------|--------------------------------------------|-------------|--------------|
| 1        | Open Website    | https://jellytranslator.siranuta13.repl.co/register | Jelly Translator register page             | Jelly Translator register page             | Pass ✅      |              |
| 2        | Fill in the registration form | Username, Password, Phone  | The input box will display the username, password, phone | The input box will display the username, password, phone | Pass ✅      |              |
| 3        | Click on the “Register” button | Click Register            | Sign in successfully and navigate to Login Page | Sign in successfully and navigate to Login Page | Pass ✅       |              |

#### Test Case 2: User Login Test 🔑
| Test Scenario ID | Test Case ID | Test Case Description                          | Test Priority | Pre-Requisite            |
| ---------------- | -------------|------------------------------------------------| --------------|--------------------------|
| Login_1          | TC02         | Ensures that users can log in with valid credentials | High         | The user must have an account |

| Step No. | Action                  | Input                                    | Expected Result                             | Actual Result                               | Test Result | Test Comment |
|----------|-------------------------|------------------------------------------|--------------------------------------------|--------------------------------------------|-------------|--------------|
| 1        | Open Website            | https://jellytranslator.siranuta13.repl.co/login | Jelly Translator login page                | Jelly Translator login page                | Pass ✅      |              |
| 2        | Enter a valid username and password | Username and Password                    | Username and Password                      | Username and Password                      | Pass ✅       |              |
| 3        | Click on the “login” button | Click login                              | Sign in successfully and navigate to the Jelly Dashboard Page | Sign in successfully and navigate to the Jelly Dashboard Page | Pass ✅       |              |

#### Test Case 3: Translate Text In Different Languages 🌐
| Test Scenario ID | Test Case ID | Test Case Description                                | Test Priority | Pre-Requisite                 |
| ---------------- | -------------|------------------------------------------------------| --------------|-------------------------------|
| Translate_1      | TC03         | Checks the accuracy of translations for multiple language pairs. | High         | The user must access the website. |

| Step No. | Action                | Input                              | Expected Result                         | Actual Result                           | Test Result | Test Comment                                                                                                    |
|----------|-----------------------|------------------------------------|----------------------------------------|----------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------|
| 1        | Open Website          | https://jellytranslator.siranuta13.repl.co/ | Jelly Translator home page             | Jelly Translator home page             | Pass ✅      |                                                                                                                 |
| 2        | Choose "From” languages (source) | English                            | English                                | English                                | Pass ✅      |                                                                                                                 |
| 3        | Choose "To" languages (target) | Target languages, Example: Thai   | Target languages, Example: Thai        | Target languages, Example: Thai        | Pass ✅      | Target languages: Spanish, Thai, French, German, Japanese, Korean, Chinese (Simplified), Chinese (Traditional), Dutch, Russian, Portuguese, Arabic |
| 4        | Enter word in the source box | “hello world”                     | “hello world”                          | “hello world”                          | Pass ✅      |                                                                                                                 |
| 5        | Check the output in the target box | -                                  | Target languages output, Example: “สวัสดีครับ/ค่ะ” | Target languages output, Example: “สวัสดีครับ/ค่ะ” | Pass ✅       |                                                                                                                 |

#### Test Case 4: Documentation Page Test 📄
| Test Scenario ID | Test Case ID | Test Case Description                                               | Test Priority | Pre-Requisite                         |
| ---------------- | -------------|---------------------------------------------------------------------| --------------|---------------------------------------|
| Doc_Page_Test_1  | TC04         | Confirms that the documentation page is accessible and displays the correct content. | High         | The user must access the website first. |

| Step No. | Action                          | Input                                       | Expected Result                                             | Actual Result                                               | Test Result | Test Comment |
|----------|---------------------------------|---------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|-------------|--------------|
| 1        | Go to the documentary page      | https://jellytranslator.siranuta13.repl.co/dictionary | Documentary Page                                            | Documentary Page                                            | Pass ✅      |              |
| 2        | Check in the documentary page that have “Translate Web App Documentation” Topic | -                                           | Documentary page have “Translate Web App Documentation” Topic | Documentary page have “Translate Web App Documentation” Topic | Pass ✅       |              |

#### Test Case 5: Verify Download, Copy, And Swap Button Functionality 🔄
| Test Scenario ID | Test Case ID | Test Case Description                                                          | Test Priority | Pre-Requisite                |
| ---------------- | -------------|--------------------------------------------------------------------------------| --------------|------------------------------|
| Button_Function_1| TC05         | Tests the functionality of the download, copy, and language swap features on the translation page. | High         | The user must access the website. |

| Step No. | Action                      | Input                                  | Expected Result                          | Actual Result                            | Test Result | Test Comment     |
|----------|-----------------------------|----------------------------------------|-----------------------------------------|-----------------------------------------|-------------|------------------|
| 1        | Open Website                | https://jellytranslator.siranuta13.repl.co/ | Jelly Translator home page              | Jelly Translator home page              | Pass ✅      |                  |
| 2        | Define the source language to “English” | -                                      | Source language is “English”            | Source language is “English”            | Pass ✅      |                  |
| 3        | Define the target language to “Thai”    | -                                      | The Target language is “Thai”           | The Target language is “Thai”           | Pass ✅      |                  |
| 4        | Enter the word in source box | “hello world”                          | “hello world”                           | “hello world”                           | Pass ✅      |                  |
| 5        | Check the output in the target box | -                                      | “สวัสดีครับ/ค่ะ”                        | “สวัสดีครับ/ค่ะ”                        | Pass ✅      |                  |
| 6        | Press the swap Button        | Press the swap button                  | English becomes the target language, and Thai becomes the source language. | English becomes the target language, and Thai becomes the source language. | Pass ✅       |                  |
| 7        | Enter the word in Thai language in the source box | “สวัสดีครับ/ค่ะ”                        | “สวัสดีครับ/ค่ะ”                        | “สวัสดีครับ/ค่ะ”                        | Pass ✅       |                  |
| 8        | Check the output in the target box | -                                      | “hello”                                 | “hello”                                 | Pass ✅       |                  |
| 9        | Press the copy button        | Press the copy button                  | The translated text “hello” is copied to the clipboard. | The translated text “hello” is copied to the clipboard. | Pass ✅       |                  |
| 10       | Press the download button    | Press the download button              | The system initiates the download of the translated text (“hello”) to the local machine. | The translated text "hello" is successfully downloaded to the local machine. | Pass ✅       |                  |

#### Test Case 6: Dictionary Page Word Search 📚
| Test Scenario ID | Test Case ID | Test Case Description                                  | Test Priority | Pre-Requisite                        |
| ---------------- | -------------|--------------------------------------------------------| --------------|--------------------------------------|
| Dic_Search_1     | TC06         | Verifies the dictionary search functionality for various words. | High         | The user must access the dictionary page. |

| Step No. | Action                  | Input                                     | Expected Result                            | Actual Result                              | Test Result | Test Comment                        |
|----------|-------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------|------------------------------------|
| 1        | Go to dictionary page   | https://jellytranslator.siranuta13.repl.co/dictionary | The dictionary page shows up              | The dictionary page shows up              | Pass ✅       |                                    |
| 2        | Searches for specific words | Input words                               | The words in drop-down list that related to the input word | The words in drop-down list that related to the input word | Pass ✅       | 4 input words: code, notebook, world, linux |
| 3        | Select the word from drop-down list | The word that selected                     | Definitions of the input words            | Definitions of the input words            | Pass ✅       |                                    |
| 4        | Check the result        | -                                         | Definitions for Input words page          | Definitions for Input words page          | Pass ✅       |                                    |

#### Test Case 7: Full User Scenario Test 🎭
| Test Scenario ID | Test Case ID | Test Case Description                                              | Test Priority | Pre-Requisite                             |
| ---------------- | -------------|--------------------------------------------------------------------| --------------|-------------------------------------------|
| Full_User_Scenario_1 | TC07         | Simulates a full user scenario including login, translation, and theme change | High         | The user must have an account to access the website. |

| Step No. | Action                  | Input                                  | Expected Result                               | Actual Result                                 | Test Result | Test Comment     |
|----------|-------------------------|----------------------------------------|----------------------------------------------|----------------------------------------------|-------------|------------------|
| 1        | Go to Login page        | https://jellytranslator.siranuta13.repl.co/login | The user will be navigated to the login page. | The user will be navigated to the login page. | Pass ✅       |                  |
| 2        | Enter a valid username and password | Username and Password                    | Username and Password                         | Username and Password                         | Pass ✅       |                  |
| 3        | Click on the “login” button | Click login                             | Sign in successfully and navigate to the Jelly Dashboard Page | Sign in successfully and navigate to the Jelly Dashboard Page | Pass ✅       |                  |
| 4        | Edits user information and changes the app theme | User information and change the application theme. | User information is updated, and the app theme is changed accordingly | User information is successfully updated, and the app theme changes as per the user's preference. | Pass ✅       |                  |
| 5        | Enter the word to translate (English to Thai) | “Hello”                                 | “สวัสดี”                                     | “สวัสดี”                                     | Pass ✅       |                  |
| 6        | Reload Page             | -                                      | The page successfully reload                  | The page successfully reload                  | Pass ✅       |                  |
| 7        | Check History           | -                                      | The translated words will be put in the history | The translated words will be put in the history | Pass ✅       |                  |
| 8        | Logout of the website   | Press Log out                          | The user is taken to a logout confirmation that shows “You have been logged out.” on the login page | Successfully logout, and the user is taken to a logout confirmation that shows “You have been logged out.” on the login page | Pass ✅       |                  |

### Requirements Traceability Matrix (RTM)
![PDF File](https://github.com/ICT-Mahidol/2023-ITCS473-GluayGluay/blob/master/Project_phase_2/tests/Manual_Test_Cases/Requirement_Traceability_Matrix.pdf) 🔗

| Req. No. | Requirement Description | Test Scenario ID | Test Case Description | TestCase ID | Status |
|----------|-------------------------|------------------|----------------------|-------------|--------|
| 1        | As a customer, I want to have my personal account. | Register_1 | To verify the functionality of the user registration process | TC01 | TC01 - Pass ✅ |
| 2        | As a customer, I want to ensure that my account can access into the website | Login_1, Full_User_Scenario_1 | Ensures that users can log in with valid credentials. | TC02, TC07 | TC02 - Pass ✅, TC07 - Pass ✅ |
| 3        | As a customer, I want to easily translate text from one language to another so I can understand content in languages I’m not familiar with. Moreover, I want the translated text to be accurate and coherent, ensuring that the meaning is preserved. | Translate_1, Button_Function_1, Full_User_Scenario_1 | Checks the accuracy of translations for multiple language pairs. | TC03, TC05, TC07 | TC03 - Pass ✅, TC05 - Pass ✅, TC07 - Pass ✅|
| 4        | As a customer, I want suggestions on how to use an application. | Doc_Page_Test_1 | Confirms that the documentation page that is page for user to understand how to use Jelly Translator is accessible and displays the correct content. | TC04 | TC04 - Pass ✅ |
| 5        | As a customer, I want to explore word meanings with a dedicated dictionary feature on the website. | Dic_Search_1 | Verifies the dictionary search functionality for various words. | TC06 | TC06 - Pass ✅|


-------------

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

#### 4. Documentation Page Test
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
**Purpose:** ✅ Simulates a full user scenario including login, translation, history, and theme change.

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
```plaintext
Copyright (C) 2023 GluayGluay - All Rights Reserved
You may use, distribute, and modify this code under the terms of the MIT license.
```
---
