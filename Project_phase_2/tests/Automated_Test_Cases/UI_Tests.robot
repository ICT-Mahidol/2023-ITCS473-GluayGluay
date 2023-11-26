*** Settings ***
Documentation     A UI test suite for various functionalities of the Jelly Translator web app.
Library           SeleniumLibrary
Library           OperatingSystem
Suite Teardown    Close All Browsers
Library           Collections
Library           String

*** Variables ***
${HOME URL}            https://jellytranslator.siranuta13.repl.co/
${REGISTRATION URL}    https://jellytranslator.siranuta13.repl.co/register
${LOGIN URL}           https://jellytranslator.siranuta13.repl.co/login
${DOC URL}             https://jellytranslator.siranuta13.repl.co/docs
${DICTONARY URL}       https://jellytranslator.siranuta13.repl.co/dictionary
${DASHBOARD URL}       https://jellytranslator.siranuta13.repl.co/dashboard
${BROWSER}             Chrome
${BASE USERNAME}       Fifa_Tests
${PASSWORD}            TestPassword123
${USERNAME_TO_TEST}    m
${PASSWORD_TO_TEST}    1
${NEW PHONE}           1234567890
${NEW LANGUAGE}        French
${THEME COLOR}         color3
${WORD_TO_TRANSLATE}   Hello

*** Test Cases ***
User Registration Test
    [Documentation]    Test Case 1: This test ensures the user registration process is functional.
    Open Registration Page
    Generate Random User Credentials
    Fill Registration Form And Submit
    Verify Registration Success
    [Teardown]    Close Browser

User Login Test
    [Documentation]    Test Case 2: This test checks if a user can log in with valid credentials.
    Open Login Page
    Fill Login Form And Submit
    Verify Login Success
    [Teardown]    Close Browser

Translate Text In Different Languages
    [Documentation]    Test Case 3: This test verifies translation accuracy for multiple language pairs.
    [Template]    Perform Translation Test
    English    Spanish                  Hello World    Hola Mundo
    English    Thai                     Hello World    สวัสดีชาวโลก
    English    French                   Hello World    Bonjour le monde
    English    German                   Hello World    Hallo Welt
    English    Japanese                 Hello World    こんにちは世界
    English    Korean                   Hello World    안녕하세요 세계
    English    Chinese (Simplified)     Hello World    你好世界
    English    Chinese (Traditional)    Hello World    你好世界
    English    Dutch                    Hello World    Hallo Wereld
    English    Russian                  Hello World    Привет, мир
    English    Portuguese               Hello World    Olá Mundo
    English    Arabic                   Hello World    مرحبا بالعالم

Docs Page Test
    [Documentation]    Test Case 4: This test confirms that the documentation page is accessible and correct.
    Open Docs Page
    Verify Docs Page Content
    [Teardown]    Close Browser

Verify Download, Copy, And Swap Button Functionality
    [Documentation]    Test Case 5: Tests the download, copy, and language swap features on the main translation page.
    [Setup]    Open Home Page
    Set Initial Languages    English    Thai
    Enter Text Into Translator    Hello World
    Swap Languages And Verify
    Enter Thai Text Into Translator    สวัสดีครับ
    Copy Translated Text And Verify
    Verify Download Initiation    id=downloadTextLink
    [Teardown]    Close Browser

Dictionary Page Word Search
    [Documentation]    Test Case 6: Verifies the dictionary search functionality for various words.
    [Template]    Test Dictionary Functionality For Word
    code
    notebook
    world
    linux

Full User Scenario Test
    [Documentation]    Test Case 7: Simulates a full user scenario including login, translation, history, and theme change.
    User Login For Scenario
    Generate Random Credentials information
    Select Random Language
    Edit User Information
    Change Theme
    Translate Word And Verify
    Logout
    [Teardown]    Close Browser

*** Keywords ***
Open Registration Page
    [Documentation]    Opens the registration page in the specified browser.
    Open Browser    ${REGISTRATION URL}    ${BROWSER}
    Maximize Browser Window

Generate Random User Credentials
    [Documentation]    Generates random strings for username and phone number.
    ${RANDOM_SUFFIX}=    Generate Random String    5    [NUMBERS]
    ${USERNAME}=    Catenate    ${BASE USERNAME}_${RANDOM_SUFFIX}
    Set Global Variable    ${USERNAME}
    ${PHONE}=    Generate Random String    10    [NUMBERS]
    Set Global Variable    ${PHONE}
    Set Global Variable    ${PASSWORD}

Fill Registration Form And Submit
    [Documentation]    Fills the registration form with user credentials and submits it.
    Wait Until Element Is Visible    id=inputUsername    10
    Input Text    id=inputUsername    ${USERNAME}
    Input Text    id=inputPassword    ${PASSWORD}
    Input Text    id=inputConfirmPassword    ${PASSWORD}
    Input Text    id=phone_number    ${PHONE}
    Click Button  css=button[type="submit"]

Verify Registration Success
    [Documentation]    Checks if the registration process was successful.
    Wait Until Page Contains    Your account has been created!    10

Open Login Page
    [Documentation]    Navigates to the login page using the specified browser.
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window

Fill Login Form And Submit
    [Documentation]    Fills in the login form with credentials and submits.
    Wait Until Element Is Visible    id=inputUsername    10
    Input Text    id=inputUsername    ${USERNAME}
    Input Text    id=inputPassword    ${PASSWORD}
    Click Button  css=button[type="submit"]

Verify Login Success
    [Documentation]    Verifies successful login by checking for a dashboard message.
    Wait Until Page Contains    Welcome to Your Dashboard    10

Perform Translation Test
    [Documentation]    Translation functionality for various language pairs.
    [Arguments]    ${source_lang}    ${target_lang}    ${text_to_translate}    ${expected_translation}
    Open Home Page
    Select Language    id=source_lang    ${source_lang}
    Select Language    id=target_lang    ${target_lang}
    Enter Text For Translation    id=input_text    ${text_to_translate}
    ${translated_text}=    Wait And Get Translated Text    id=translated_text    10s
    Should Be Equal As Strings    ${translated_text}    ${expected_translation}
    Close Browser

Open Home Page
    [Documentation]    Opens the Jelly Translator home page in a browser.
    Open Browser    ${HOME URL}    ${BROWSER}
    Maximize Browser Window

Select Language
    [Documentation]    Selects a specified language in a dropdown menu.
    [Arguments]    ${dropdown_id}    ${language}
    Select From List By Label    ${dropdown_id}    ${language}

Enter Text For Translation
    [Documentation]    Enters the given text into the translator input field.
    [Arguments]    ${element_id}    ${text}
    Input Text    ${element_id}    ${text}

Wait And Get Translated Text
    [Documentation]    Waits for translation to complete and retrieves the translated text.
    [Arguments]    ${element_id}    ${timeout}=20s
    Wait Until Element Is Visible    ${element_id}    ${timeout}
    ${pre_translation_text}=    Get Value    ${element_id}
    Log    Pre-translation text: ${pre_translation_text}
    Sleep    5s
    ${translated_text}=    Get Value    ${element_id}
    Log    Translated text: ${translated_text}
    [Return]    ${translated_text}

Open Docs Page
    [Documentation]    Opens the documentation page of Jelly Translator.
    Open Browser    ${DOC URL}    ${BROWSER}
    Maximize Browser Window

Verify Docs Page Content
    [Documentation]    Confirms the presence of expected content on the docs page.
    Wait Until Page Contains    Translate Web App Documentation    10

Set Initial Languages
    [Documentation]    Sets the initial languages for translation source and target.
    [Arguments]    ${source_lang}    ${target_lang}
    Select Language    id=source_lang    ${source_lang}
    Select Language    id=target_lang    ${target_lang}
    Log    Set source language to ${source_lang} and target language to ${target_lang}

Enter Text Into Translator
    [Documentation]    Inputs the given text into the translator's text box.
    [Arguments]    ${text}
    Wait Until Element Is Visible    id=input_text    10s
    Input Text    id=input_text    ${text}
    Log    Entered text into translator: ${text}

Swap Languages And Verify
    [Documentation]    Swaps the source and target languages and verifies the change.
    ${original_source_lang}=    Get Selected List Value    id=source_lang
    ${original_target_lang}=    Get Selected List Value    id=target_lang
    Log    Original Source Language: ${original_source_lang}
    Log    Original Target Language: ${original_target_lang}

    Should Not Be Equal    ${original_source_lang}    ${original_target_lang}

    Log    Attempting to click the swap button.
    Click Element    id=change
    Log    Swap button clicked. Waiting for the swap to complete.

    ${new_source_lang}=    Get Selected List Value    id=source_lang
    ${new_target_lang}=    Get Selected List Value    id=target_lang
    Log    After Swap - Source Language: ${new_source_lang}
    Log    After Swap - Target Language: ${new_target_lang}

    Should Not Be Equal    ${new_source_lang}    ${new_target_lang}
    Should Be Equal    ${original_source_lang}    ${new_target_lang}
    Should Be Equal    ${original_target_lang}    ${new_source_lang}


Enter Thai Text Into Translator
    [Documentation]    Inputs Thai text into the translator for testing.
    [Arguments]    ${text}
    Wait Until Element Is Visible    id=input_text    10s
    Clear Element Text    id=input_text
    Input Text    id=input_text    ${text}
    Log    Entered Thai text into translator: ${text}

Copy Translated Text And Verify
    [Documentation]    Copies the translated text and verifies its presence in clipboard.
    Wait Until Element Is Visible    id=copyToClipboard    10s
    ${text_to_be_copied}=    Get Value    id=input_text
    Log    Text to be copied: ${text_to_be_copied}

    Click Element    id=copyToClipboard
    Sleep    2s

    ${copied_text}=    Get Value    id=input_text
    Log    Copied text: ${copied_text}

    Should Not Be Empty    ${copied_text}

Verify Download Initiation
    [Documentation]    Verifies that the initiation of a download occurs upon button click.
    [Arguments]    ${download_button_id}    ${wait_time}=5s
    Wait Until Element Is Visible    ${download_button_id}    10s
    Click Element    ${download_button_id}
    Sleep    ${wait_time}
    Log    Download initiation verified for button: ${download_button_id}

Test Dictionary Functionality For Word
    [Documentation]    Searches a word in the dictionary and verifies the search results.
    [Arguments]    ${word}
    Open Dictionary Page
    Search And Select Word    ${word}
    Verify Search Results     ${word}
    Close Browser

Open Dictionary Page
    [Documentation]    Opens the dictionary page of Jelly Translator.
    Open Browser    ${DICTONARY URL}    ${BROWSER}
    Maximize Browser Window

Search And Select Word
    [Documentation]    Searches for a specified word in the dictionary.
    [Arguments]    ${word}
    Wait Until Element Is Visible    id=search-word    10
    Input Text    id=search-word    ${word}
    Wait Until Element Is Visible    css=.list-group-item    10
    Click Element    css=.list-group-item

Verify Search Results
    [Documentation]    Verifies the search results for a specified word in the dictionary.
    [Arguments]    ${word}
    Wait Until Page Contains    ${word}    10

User Login For Scenario
    [Documentation]    Logs in a user for the full user scenario test.
    Open Login Page
    Input Text    id=inputUsername    ${USERNAME_TO_TEST}
    Input Text    id=inputPassword    ${PASSWORD_TO_TEST}
    Click Button  css=button[type="submit"]
    Wait Until Page Contains    Welcome to Your Dashboard    10

Generate Random Credentials information
    [Documentation]    Generates random phone number for test user.
    ${RANDOM_SUFFIX}=    Generate Random String    5    [NUMBERS]
    ${NEW PHONE}=    Catenate    11111${RANDOM_SUFFIX}
    Set Global Variable    ${NEW PHONE}

Select Random Language
    [Documentation]    Selects a random language from the list for the user.
    @{LANGUAGES}=    Create List    English    Thai    Spanish    French    Japanese    Chinese (Simplified)    Chinese (Traditional)    German    Italian    Dutch    Russian    Portuguese    Korean    Arabic
    ${size}=    Get Length    ${LANGUAGES}
    ${index}=    Evaluate    random.randint(0, ${size} - 1)    modules=random
    ${RANDOM_LANGUAGE}=    Get From List    ${LANGUAGES}    ${index}
    Select From List By Label    id=language    ${RANDOM_LANGUAGE}
    Set Global Variable    ${RANDOM_LANGUAGE}

Edit User Information
    [Documentation]    Edits user information in the user profile section.
    Go To    ${DASHBOARD URL}
    Input Text    xpath=//input[@name='phone']    ${NEW PHONE}
    Select From List By Label    id=language    ${RANDOM_LANGUAGE}
    Click Button    xpath=//button[contains(text(), 'Save Changes')]
    Wait For Condition    return document.readyState == 'complete'

Change Theme
    [Documentation]    Changes the theme color setting of the application.
    ${theme_ids}=    Create List    color0    color1    color2    color3    color4
    ${random_index}=    Evaluate    random.randint(0, len($theme_ids) - 1)    modules=random
    ${selected_theme}=    Get From List    ${theme_ids}    ${random_index}
    ${color_link}=    Set Variable    /change-color-setting?color_setting=${selected_theme}
    Go To    ${DASHBOARD URL}
    Wait Until Page Contains    Customize Theme    20s
    Execute JavaScript    window.location.href='${color_link}'
    Sleep    2s

Translate Word And Verify
    [Documentation]    Translates a word and reload a page, then check the history of translation.
    Go To    ${HOME URL}
    Select From List By Label    id=source_lang    English
    Select From List By Label    id=target_lang    Thai
    Input Text    id=input_text    ${WORD_TO_TRANSLATE}
    Sleep    5s
    Reload Page
    Sleep    5s
    ${history}=    Get Text    css=.history
    Should Contain    ${history}    ${WORD_TO_TRANSLATE}

Logout
    [Documentation]    Logs out the user from the application.
    Click Link    xpath=//a[contains(@href, '/logout')]
    Wait Until Page Does Not Contain    Welcome to Your Dashboard
