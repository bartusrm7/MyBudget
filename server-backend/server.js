require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5174;
app.use(express.json());
app.use(cors());

let users = [];
let cards = [];

const validateEmail = email => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};
const validatePassword = password => {
	return password.length >= 8;
};

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null) return res.sendStatus(401);
	jwt.verify(token.process.env.ACCESS_TOKEN_SECRET, (err, users) => {
		if (err) return res.sendStatus(403);
		req.users = users;
		next();
	});
};

app.get("/cards", authenticateToken, (req, res) => {
	const userCards = cards.filter(card => card.userEmail === req.card.userEmail);
	res.json(userCards);
});

app.post("/cards", authenticateToken, (req, res) => {
	const { owner, number, expirationDate, balance } = req.body;
	const newCard = {
		userEmail: req.user.userEmail,
		owner,
		number,
		expirationDate,
		balance,
	};
	cards.push(newCard);
	res.status(201).json(newCard);
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
	const { userEmail, userPassword } = req.body;
	const user = users.find(user => user.userEmail === userEmail || user.userPassword === userPassword);
	const payload = { userEmail: user.userEmail };
	const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5min" });

	if (!user) {
		return res.status(400).json({ message: "Invalid username or password!" });
	}

	res.json({ accessToken: accessToken });
});

app.listen(port, () => {
	console.log(`Server is running on the: http://localhost:${port}`);
});
