# livabl-playwright-test

# Livabl Playwright Test Suite 
This repository contains an automated test suite built with **Playwright (JavaScript)** to validate the **Listing Search** feature on [Livabl.com](https://www.livabl.com/).

##  Objectives
- Automate basic search flow verification.
- Validate mandatory fields in property cards.
- Test filters (Price Range, Bedrooms) for dynamic updates.
- Demonstrate Page Object Model (POM) and stable locator design.

##  Folder Structure
C:\Users\Aditi\Automation\Zonda
├── .git
|  ├── COMMIT_EDITMSG
|  ├── config
|  ├── description
|  ├── FETCH_HEAD
|  ├── HEAD
|  ├── hooks
|  ├── index
|  ├── info
|  ├── logs
|  ├── objects
|  ├── ORIG_HEAD
|  └── refs
├── .github
|  └── workflows
├── .gitignore
├── node_modules
|  ├── .bin
|  ├── .package-lock.json
|  ├── @playwright
|  ├── @types
|  ├── playwright
|  ├── playwright-core
|  └── undici-types
├── package-lock.json
├── package.json
├── pages
|  ├── HomePage.js
|  └── ListPage.js
├── playwright-report
|  ├── data
|  └── index.html
├── playwright.config.js
├── README.md
├── test-results
|  ├── .last-run.json
|  └── POM-test-webkit
└── tests
   ├── example.spec.js
   └── POM.spec.js

directory: 21 file: 19

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adavadkar/livabl-playwright-test.git
   cd livabl-playwright-test
2. Install dependencies
   npm install
3. Run tests in headed mode
   npx playwright test tests/pom.spec.js --headed

## Test Cases implemented
**Smoke Test**
Verifies homepage loads successfully.
Performs search for a city (e.g., Toronto).
Validates that listings page is displayed with at least one card visible.
Checks mandatory fields (name, price, builder, address, size).

**Filter Test**
Applies a price range (300k–700k) and bedroom filter (3 bedrooms)
Waits for listings to refresh dynamically.
Verifies listing count changes after filters are applied.

## Design Pattern
Implements Page Object Model (POM) for better maintainability:
HomePage.js → Encapsulates search input and navigation.
ListPage.js → Handles validation of property details and filter actions.

## Tech Stack
Playwright (Automation framework)
JavaScript / Node.js
HTML Report via Playwright’s built-in reporter
Assertions via Playwright’s expect

## Notes
Some listings and filters on Livabl are dynamic; tests use waits and stable locators to avoid flakiness.
search text can be parameterized.
This test suite demonstrates a scalable automation approach suitable for CI/CD integration.
