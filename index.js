const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'town',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
        {
          type: 'input',
          message: 'What is your LinkedIn URL?',
          name: 'linkedIn',
        },
    ])
    .then((response) => {
      fs.writeFile('index.html', `

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<title>Node Mini Project</title>
</head>
<body>
<h1 id="name" class='border'>My name is: ${response.name}</h1>
<h2 id="town" class='border'>I live in: ${response.town}</h2>
<h2 id="github" class='border'>My Github URL: ${response.github}</h2>
<h2 id="linkedin" class='border'>My LinkedIn URL: ${response.linkedIn}</h2>

<script type="text/javascript" src="index.js"></script>
</body>
</html>        
      `, (err) =>
          err ? console.error(err) : console.log('Commit logged!'));
  })
