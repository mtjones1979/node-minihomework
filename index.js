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
<title>Node Mini Project</title>
</head>
<body>
<h1 id="name">My name is: ${response.name}</h1>
<h2 id="town">I live in: ${response.town}</h2>
<h2 id="github">My Github URL: ${response.github}</h2>
<h2 id="linkedin">My Linkedin URL: ${response.linkedin}</h2>

<script type="text/javascript" src="index.js"></script>
</body>
</html>        
      `, (err) =>
          err ? console.error(err) : console.log('Commit logged!'));
  })
