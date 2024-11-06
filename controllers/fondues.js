const fondues = [
    { id: "1", name: "Fondue 1", ingredients: ["fromage", "vin blanc"] },
    { id: "2", name: "Fondue 2", ingredients: ["boeuf", "huile"] }
];

function index(req, res) {
    res.json(fondues);
}

module.exports = { index };