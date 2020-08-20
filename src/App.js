import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const nayoks = [
		"Razzak",
		"Alamgir",
		"Salman Shah",
		"Elias Kanchan",
		"Omor Suny",
		"Shuvo",
		"Tahsan",
	];
	const products = [
		{ name: "Photoshop", price: "$4.00" },
		{ name: "Figma", price: "$5.00" },
		{ name: "Sketch", price: "$6.00" },
		{ name: "After Efects", price: "$26.00" },
		{ name: "Premier pro", price: "$96.00" },
	];
	const productNames = products.map((product) => product.name);
	// console.log(productNames);

	return (
		<div className="App">
			<header className="App-header">
				<p>Yeah baby, I am doin' react</p>

				<Counter />

				<Users />

				<Person name="Saief" profession="Web Developer" />
				<Person name="Jhon Doe" profession="Doing nothing" />

				{/* <Products product={products[0]} />
				<Products product={products[1]} /> */}

				{products.map((item) => (
					<Products product={item} />
				))}
			</header>
		</div>
	);
}

function Users() {
	const style = {
		textAlign: "left",
		listStyle: "none",
		margin: "0",
		padding: "0",
	};
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h3>Dynamic users: {users.length} </h3>
			<ul style={style}>
				{console.log(users)}
				{users.map((user) => (
					<li
						style={{
							border: "1px solid pink",
							margin: "3px",
							padding: "10px",
							width: "300px",
						}}
					>
						{user.name}, <br />
						{user.phone},<br />
						{user.email}
					</li>
				))}
			</ul>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const handleIncrease = () => setCount(count + 1);
	const handleDecrease = () => setCount(count - 1);
	return (
		<div>
			<h1>
				Counter: &nbsp;
				<button onMouseMove={handleDecrease}>-</button>
				<strong> {count} </strong>
				<button onMouseMove={handleIncrease}>+</button>
			</h1>
		</div>
	);
}

function Products(props) {
	const style = {
		border: "1px solid cyan",
		margin: "5px",
		padding: "10px",
		width: "300px",
	};

	return (
		<div style={style}>
			<small> Dynamic Component</small>
			<h3>
				{props.product.name}, {props.product.price}
			</h3>
			<p></p>
			<button>Buy Now</button>
		</div>
	);
}

function Person(props) {
	const style = {
		border: "1px solid orange",
		margin: "5px",
		padding: "0px 10px",
		width: "300px",
	};
	// console.log(props);
	return (
		<div style={style}>
			<small> Static Component</small>
			<h3>Name : {props.name}</h3>
			<p>Profession: {props.profession}</p>
		</div>
	);
}

export default App;
