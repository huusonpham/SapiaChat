# Sapia home test

### Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

### About <a name = "about"></a>

The purpose of this project is to execute automated testing. It includes:
- Web UI automated testing\

This is the keyword-driven framework 

### Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

#### Prerequisites

Your local must install:
- Java 11
- Node JS (latest version)
- Setup JAVA_HOME,
- Visual Studio Code IDE
- Playwright(using command to install with Javascript language: `npm init playwright`)

#### Execute Test

Execute test by command line, execute a command in terminal:
- If you want to run all test cases: `npm run test`
- If you want to run all happy test cases: `npm run happy`
- If you want to run all unhappy test cases: `npm run unhappy`

#### Note

All test cases will be retried one time if the first run is failed