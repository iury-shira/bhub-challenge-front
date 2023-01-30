# Bhub Challenge: Front end

This project is a simple react application, using TypeScript, which can be used to perform perform basic CRUD
operations on a SQLite relational test database located at the back end application server. It also has a user authentication mechanism, with JWT token saved within users browser local storage.

## Why these technologis was chosen?

- React.js works with the SPA (Single Page Application) idea, where a virtual DOM representing the UI in maintained in memory, to check which components/nodes need to be updated in fact. This allows the application to have a better responsiveness to the users interactions

- Using React also allow the developer to be more productive in comparison to work with vanilla JS and pure HTML/CSS files

- Bootstrap (and Sass for editing) was used once it already provides a bunch of aesthetic customizations for the components styles

- Both react-router-dom and react-hook-form libraries were used to give a better productive and proffessional development of the app routes and forms

- TypeScript has a nice workflow with React and make our codebase more type safe

## Installation and set up

First of all, run the back end app and register a user (a username of email type and password), then apply/follow the steps bellow:

- Have Node 16.1+ and yarn 1.2+ installed on local machine

- Clone this project/git repo on local machine

- Go to the directory where the repo was cloned and install de yarn dependencies (where package.json is)

```bash
yarn install
```

- Then, with the back end application already running on 'http://localhost:8000/', run the test version of the front app:

```bash
yarn start
```

Now users can use its own browser to access 'http://localhost:3000/' to have a nice and friendly UI to interact with the CRUD operations of client and bank accounts resources/entities. It is important to notice that first the user should have a username (email type) and password registered at back end to be able to authenticate and navigate through the front app routes.

## Usage and testing

The front app has the following routes:

- /admin/auth
- /admin/auth/signup
- /admin/auth/recover
- /admin/login
- /admin/clients
- /admin/clients/:clientId
- /admin/clients/create
- /admin/bankaccounts
- /admin/bankaccounts/ownerId/:ownerId
- /admin/bankaccounts/edit/:bankAccountId
- /admin/bankaccounts/create/:ownerId
- /admin/users

It is important to notice that, in order to be able to create a new bank account, you should first access the "edit" option of a client entity, and then select the option of "editing this client bank accounts". This design was chosen to enforce that every bank account created in the system should be related to a client.

Another enforced design was the disablement of the "owner_id" field of a bank account when a user tries to edit/create an entity of this type. Once this "owner_id" field should be a foreign key in our relational database, it was preferred to not rely on user that this field would be filled correctly.

## What can be improved

Due to the short deadline and the basic nature of this application, a lot could be improved, either in terms of codebase/business logic complexity and deployment/infrastructure:

- Implementation of JEST tests and React Testing library

- Implementation of Pagination and Search Bars

- Implementation of '/admin/auth/signup' and '/admin/auth/recover' routes flows

- SSL certificates for HTTPS communication

- Implementation of loaders cards (for a better UX when the user has poor network connection)

- Dockerize and build the React application

- Deploy on a Cloud provider

- Optional Firebase authentication integration

- A complete CRUD for user entity

- Enable different routes and components based on different roles for different users

- A better validation (with Regex) of the fields, before saving them at the DB

- As the project grows in complexity and gets more resources, would be preferable to:

    - Use a more complex managment state tool, as Redux

    - Separated and customized exception objects


Pull requests are welcome. There's a lot that can improve in this project.
