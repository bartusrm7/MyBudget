const express = require("express");
const cors = require("cors");

const app = express();
const port = 5174;
app.use(express.json());
app.use(cors());

let users = [];

const validateEmail = email => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};
const validatePassword = password => {
	return password.length >= 8;
};

app.get("/", (req, res) => {
	res.send("MyBudget backend");
});

app.post("/register", (req, res) => {
	const { userLogin, userEmail, userPassword } = req.body;
	const userExists = users.some(user => user.userEmail === userEmail);

	if (userExists) {
		return res.status(400).json({ message: "User already exists!" });
	}
	if (!validateEmail(userEmail)) {
		return res.status(400).json({ message: "Invalid email format!" });
	}
	if (!validatePassword(userPassword)) {
		return res.status(400).json({ message: "Password is to short!" });
	}

	users.push({ userLogin, userEmail, userPassword });
	res.status(200).json({ message: "User registered successfully!" });

	console.log(userExists);
	console.log(users);
});

app.post("/login", (req, res) => {
	const { userEmail, userPassword } = req.body;
	const user = users.find(user => user.userEmail === userEmail || user.userPassword === userPassword);
	if (!user) {
		return res.status(400).json({ message: "Invalid username or password!" });
	}

	res.status(200).json({ message: "User loged successfully!" });
});

app.listen(port, () => {
	console.log(`Server is running on the: http://localhost:${port}`);
});
