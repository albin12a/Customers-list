# steps to run the project
after cloning the project
  npm i 
  npm run dev
  paste this on browser http://localhost:8000
  You can see the list of customers in a table
  You can edit the customer details by clicking the each list of customer
  One modal would open with details and you could edit and press submit button
  You would see the validation messages when the name or email field is empty
  You could see the submitted details in the browser console

  I have enjoyed it while creating this app because after a while I have done a project fully and alone. Also I have used some customized functionality other than depending on third party packages


# Wave Front-end Challenge

The purpose of this exercise is to create something that we can work on together during the onsite interview. We do this so that you get a chance to
collaborate with Wavers during the interview in a situation where you know something better than us (it's your code, after all!)

There isn't a hard deadline for this exercise; take as long as you need to complete it. However, in terms of total time spent actively
working on the challenge, we ask that you not spend more than a few hours, as we value your time and are happy to leave things open to
discussion in the on-site interview.

Please use whatever tools or frameworks you feel the most comfortable with.

Feel free to email [dev.careers@waveapps.com](dev.careers@waveapps.com) if you have any questions.

**Table of Contents**

- [Project Background](#project-background)
- [Requirements](#requirements)
  - [Functional Requirements](#functional-requirements)
  - [Technical requirements](#technical-requirements)
  - [Visual/UX Requirements](#visualux-requirements)
  - [Language requirement](#language-requirement)
- [Documentation](#documentation)
- [Submission Instructions](#submission-instructions)
- [Evaluation](#evaluation)

## Project Background

Imagine that this is the early days of Wave's history, and that **we are prototyping a new invoicing system** in Canada. Our users are small business owners who need to generate professional-looking invoices to send to their customers. For this code challenge, build out **the settings page where users (business owners) can manage their customers' information**. Our prototype will be entirely API-driven and use a Javascript single-page app as the interface to our APIs.

## Requirements

### Functional Requirements

Customer information page should do the following:

- Retrieve the data from the GET endpoint: https://waveaccounting.github.io/se-challenge-fe-customers/settings.json
  - use fetch, XHR, JQuery or whatever library you're familiar with.
- Show a list of customers (in the JSON under the "customers" key).
- Let the user select a customer for editing, which shows a form with:
  - name
  - email
  - channel (value may be one of 'website', 'email', 'phone', 'word-of-mouth', 'other', 'unknown')
  - address
  - postal
  - city
  - province (For now this will be a Canada only product and all addresses are assumed to be in Canada, but we plan to roll this out to other countries later.)
- Name and email fields are required. Empty values should present an error message if submitted.
- On form submit, log the JSON payload to console (no need to mock out server calls!)

### Technical requirements

- Your application should be easy to run and browse, and should run on either Linux or Mac OS X.
- It should not require any non open-source software.
- Our desire is to approach this in a way that gives us composable, reusable code for use in later features and products. So some thought should be given to how this code could be expanded upon and repurposed.

### Visual/UX Requirements

There isn't a particular design we want you to recreate. The UI doesn't have to look beautiful, as long as:

- A user can easily differentiate different sections of the page
- A user can understand how to access and submit the customer edit form
- The page is useable on desktop and mobile devices
- It will be easy to add more styling later

### Language requirement

- Should be built in vanilla JS, Typescript or a JS-based framework (React, Angular, Vue etc).
  - Use any JS framework, tooling, scaffolding, starter-kits you are comfortable with that feels appropriate for this challenge. At Wave, we have used Backbone, Angular, React with the emphasis being heavily on React for current work.
- HTML/JSX: Should use semantic HTML tags
- CSS: Include at least ONE example of creating layout using CSS (or SASS, SCSS etc).
  - The page should be responsive.
  - But don't spend too much time making the app look pretty, we only expect the basics.

## Documentation

Please modify `README.md` to add:

1. Instructions on how to build/run your application
1. A paragraph or two about what you are particularly proud of in your implementation, and why.

## Submission Instructions

1. Clone the [repository](https://github.com/waveaccounting/se-challenge-fe-customers).
1. Complete your project as described above within your local repository.
1. Ensure everything you want to commit is committed.
1. Create a git bundle: `git bundle create your_name_front_end.bundle --all`
1. Email the bundle file to [dev.careers@waveapps.com](dev.careers@waveapps.com)

## Evaluation

Evaluation of your submission will be based on the following criteria.

1. Followed the instructions for submission
1. The submission met all the functional requirements
1. The submission met all the technical requirements
1. The various parts of the application and their usage are easily identifiable to the reviewer
1. The code can easily be repurposed, reused and expanded upon
