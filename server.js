const inquirer = require('inquirer');
const db = require('./db/connection')
const mysql = require('mysql');
const express = require('express');
const { connection } = require('./db/connection');
const router = express.Router();

db.connect(async function () {
    start();
});

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an Option.',
            choices: [
                'View All Employees',
                'View Roles',
                'View Departments',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ])
        .then((answer) => {
            switch (answer.choice) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Quit':
                    quit();
                    break;
            }
        }
        )
}

function viewAllEmployees() {
    const request = 'SELECT * FROM employee';
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an Option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ],
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        quit();
                        break;
                }
            })
    })
};

function viewRoles() {
    let request = 'SELECT * FROM role';
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an Option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ],
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        quit();
                        break;
                }
            }
            )
    })
}

function viewDepartments() {
    const request = 'SELECT * FROM department';
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an Option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ],
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        quit();
                        break;
                }
            }
            )
    })
}

//  add new employee 
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee.'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee.'
        },
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter the id of the employee.'
        }
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter their managers id.'
        }
    ])
        .then(function (response) {
            connection.query('INSERT INTO employees(first_name, last_name, employee_id, manager_id) VALUES(?,?,?,?)', [response.first_name, response.last_name, response.employee_id, response.manager_id], function (err, res) {
                if (err) throw err;
                console.table(res);

                start();
            }
        }
