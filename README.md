# Fit by Beat

https://fitbybeat.com is a website focused on health and fitness. In this project, there's end-to-end automation tests for BMI (Body Mass Index) calculations using Cypress.

## Table of Contents

- [Fit by Beat](#fit-by-beat)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Clone the project](#clone-the-project)
    - [Install the packages](#install-the-packages)
    - [Run the tests](#run-the-tests)
    - [Run all the tests \[headless mode\]](#run-all-the-tests-headless-mode)
    - [Generate reports](#generate-reports)
  - [Sample Tests \[videos\]](#sample-tests-videos)
    - [Feature \[BMICalculate\]](#feature-bmicalculate)
    - [Feature \[BMICompare\]](#feature-bmicompare)
    - [All Features \[Headless Mode\]](#all-features-headless-mode)
    - [Test Reports \[With Screenshots\]](#test-reports-with-screenshots)

## Getting Started

### Clone the project

```bash
git clone https://github.com/primprum/fit-by-beat.git
```

### Install the packages

```bash
cd fit-by-beat \
npm i
```

### Run the tests

```bash
npm run cy:open
```

### Run all the tests [headless mode]

```bash
npm run cy:run
```

### Generate reports

```bash
npm run report
```

## Sample Tests [videos]

There are 2 features file to test:

- BMICalculate
- BMICompare

### Feature [BMICalculate]

There are 3 scenarios in this test:

- Calculate BMI with Complete Valid Inputs
- Calculate BMI with Incomplete Valid Inputs
- Calculate BMI with Blank Inputs

[![Test Demo](https://img.youtube.com/vi/c7F-FCpeUy4/maxresdefault.jpg)](https://www.youtube.com/embed/c7F-FCpeUy4)

### Feature [BMICompare]

This test is aiming at seeing whether different sex should give different BMR result

There are 3 scenarios in this test:

- Calculate BMR with Activity Factors for Male
- Calculate BMR with Activity Factors for Female
- Compare BMR with Activity Factors for Male and Female

[![Test Demo](https://img.youtube.com/vi/GVEXRp7vico/maxresdefault.jpg)](https://www.youtube.com/embed/GVEXRp7vico)

### All Features [Headless Mode]

[![Test Demo](https://img.youtube.com/vi/0ciyDpYPE1I/maxresdefault.jpg)](https://www.youtube.com/embed/0ciyDpYPE1I)

### Test Reports [With Screenshots]

Github Pages => [https://primprum.github.io/fit-by-beat/](https://primprum.github.io/fit-by-beat/)
