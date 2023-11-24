*** Settings ***
Documentation     A test suite for user registration and login functionalities.
Library           SeleniumLibrary
Library           String

*** Variables ***
${REGISTRATION URL}    https://jellytranslator.siranuta13.repl.co/register
${LOGIN URL}           https://jellytranslator.siranuta13.repl.co/login
${BROWSER}             Chrome
${BASE USERNAME}       Fifa_Test
${PASSWORD}            TestPassword123

*** Test Cases ***
User Registration Test
    Open Registration Page
    Generate Random User Credentials
    Fill Registration Form And Submit
    Verify Registration Success
    Close Browser

User Login Test
    Open Login Page
    Fill Login Form And Submit
    Verify Login Success
    [Teardown]    Close Browser

*** Keywords ***
Open Registration Page
    Open Browser    ${REGISTRATION URL}    ${BROWSER}
    Maximize Browser Window

Generate Random User Credentials
    ${RANDOM_SUFFIX}=    Generate Random String    5    [NUMBERS]
    ${USERNAME}=    Catenate    ${BASE USERNAME}_${RANDOM_SUFFIX}
    Set Global Variable    ${USERNAME}
    ${PHONE}=    Generate Random String    10    [NUMBERS]
    Set Global Variable    ${PHONE}
    Set Global Variable    ${PASSWORD}

Fill Registration Form And Submit
    Wait Until Element Is Visible    id=inputUsername    10
    Input Text    id=inputUsername    ${USERNAME}
    Input Text    id=inputPassword    ${PASSWORD}
    Input Text    id=inputConfirmPassword    ${PASSWORD}
    Input Text    id=phone_number    ${PHONE}
    Click Button  css=button[type="submit"]

Verify Registration Success
    Wait Until Page Contains    Your account has been created!    10

Open Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window

Fill Login Form And Submit
    Wait Until Element Is Visible    id=inputUsername    10
    Input Text    id=inputUsername    ${USERNAME}
    Input Text    id=inputPassword    ${PASSWORD}
    Click Button  css=button[type="submit"]

Verify Login Success
    Wait Until Page Contains    Welcome to Your Dashboard    10
