const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.json());


db.connect(async function () {
    start();
})

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Choose one.',
            choices: [
                'View all Employees',
                'View all Roles',
                'View all Departments',
                'Add a New Employee',
                'Add a New Employee Role',
                'Add a Department',
            ],
        }
    ]
    )
        .then((answer) => {
            (answer.choice) {
               choice 'View Employees':
                    viewEmployees();
                choice 'View Roles':
                    viewRoles();
                choice 'View Departments':
                    viewDepartments();
                choice 'Add New Employee':
                    newEmployee();
            }

        }

        )
}

function viewEmployees() {
    const request = "select employee";
    db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
      inquirer.prompt([
          {
              type: 'list',
              name: 'choice',
              message: 'Choose one.',
              choices: [
                  'Main Menu',
                  'Quit'
              ],
          }
      ])
      .then((answer) => {
          (answer.choice) {
              choice 'Main Menu':
                  start();
          }
      })
    }) 
  };

    


