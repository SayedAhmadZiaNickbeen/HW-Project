/* General Styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    line-height: 1.6;
}

header {
    background-color: #34495e;
    color: white;
    padding: 10px 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}

section {
    padding: 20px;
    margin: 20px;
    text-align: center;
}

.home {
    background-color: #2ecc71;
    color: white;
}

.departments {
    background-color: #3498db;
    color: white;
}

.department-list {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.department {
    background-color: #2980b9;
    padding: 20px;
    width: 20%;
    border-radius: 5px;
    cursor: pointer;
}

.department:hover {
    background-color: #1abc9c;
}

.about, .contact {
    background-color: white;
    color: black;
}

form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
}

form input, form textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    padding: 10px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #27ae60;
}

footer {
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
}
