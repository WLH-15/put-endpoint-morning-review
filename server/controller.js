const people = [
	{
		id: 1,
		firstName: "Michael",
		lastName: "Scott"
	},
	{
		id: 2,
		firstName: "Dwight",
		lastName: "Schrute"
	}
];

module.exports = {
	getPeople: (req, res) => {
		res.status(200).send(people);
	},

	updatePerson: (req, res) => {
		const { id } = req.params;
		// console.log("id", id)
		const { firstName, lastName } = req.body;
		console.log();
		// console.log("firstName", firstName)
		// console.log("lastName", lastName)
		// console.log("req.body", req.body)
		const index = people.findIndex(person => person.id === +id);
		people[index] = {
			id: +id,
			firstName,
			lastName
        };
        // console.log('people array', people)
		res.status(200).send(people);
	}
};
