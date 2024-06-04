require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

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
	const userExists = users.some(user => user.userLogin === userLogin || user.userEmail === userEmail);
	const newUser = { userLogin, userEmail, userPassword };

	if (userExists) {
		return res.status(400).json({ message: "User already exists!" });
	}
	if (!validateEmail(userEmail)) {
		return res.status(400).json({ message: "Invalid email format!" });
	}
	if (!validatePassword(userPassword)) {
		return res.status(400).json({ message: "Password is to short!" });
	}
	users.push(newUser);
	res.status(200).json({ message: "User registered successfully!", users });
});

app.post("/login", (req, res) => {
	const { userLogin, userEmail, userPassword } = req.body;
	const user = users.find(
		user => user.userLogin === userLogin || user.userEmail === userEmail || user.userPassword === userPassword
	);
	const payload = { userEmail: user.userEmail };
	const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10min" });

	if (!user) {
		return res.status(400).json({ message: "Invalid username or password!" });
	}

	console.log(users);
	console.log(userLogin);
	res.json({ accessToken: accessToken }, user, userLogin);
});

app.listen(port, () => {
	console.log(`Server is running on the: http://localhost:${port}`);
});
