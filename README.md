# Todo App
Welcome to the Todo App! This app is a simple way to keep track of your tasks and to-do items. It is built using the PERN stack (PostgreSQL, Express, React, and Node.js).

## Getting Started
1. Clone the repository onto your local machine:
`git clone https://github.com/<your-username>/todo-app.git`
2. Install the dependencies:
`npm install`
3. Set up the database:
* Create a PostgreSQL database called todo_app
* In the root directory of the project, create a file called .env
* In the .env file, add the following line, replacing <password> with your PostgreSQL password:
`DATABASE_URL=postgresql://<username>:<password>@localhost/todo_app`

4. Migrate the database:
`npm run migrate`

5. Seed the database (optional):
`npm run seed`

6. Start the app:
`npm run start`
The app will now be running on http://localhost:3000.

## Using the App
* To add a new todo item, type the task into the input field and press the "Add Todo" button.
* To mark a todo as complete, click on the checkbox next to the task.
* To delete a todo, click on the trash icon next to the task.

## Built With
**PostgreSQL** - The database
**Express** - The web framework
**React** - The front-end library
**Node.js** - The runtime environment

## Author
* Elijah Elliott - https://github.com/Eelli002


## License
This project is licensed under the MIT License - see the LICENSE file for details.