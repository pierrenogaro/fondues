const fondues = [
    { id: "1", name: "Fondue 1", ingredients: ["fromage", "vin blanc"] },
    { id: "2", name: "Fondue 2", ingredients: ["boeuf", "huile"] }
];

function index(req, res) {
    res.json(fondues);
}

function show(req, res) {
    const id = req.params.id
    const fondue = fondues.find(fondue => fondue.id === id)

    if (!fondue) {
        return res.status(404).send('Product not found')
    }
    res.json(fondue)
}

function create(req, res) {
    const { name, ingredients } = req.body

    const newFondue = {
        id: (fondues.length + 1).toString(),
        name,
        ingredients
    };

    if (!name || !ingredients) {
        return res.status(400).send('Name and ingredients are required');
    }

    fondues.push(newFondue);
    res.status(201).json(newFondue);
}

function update(req, res) {
    const { name, ingredients } = req.body;
    const id = req.params.id;
    const fondue = fondues.findIndex(fondue => fondue.id === id);

    const updatedFondue = {
        id: fondues[fondue].id,
        name,
        ingredients
    };

    if (!fondue) {
        return res.status(404).send('Fondue not found');
    }

    if (!name || !ingredients) {
        return res.status(400).send('Name and ingredients are required');
    }

    fondues[fondue] = updatedFondue;
    res.status(200).json(updatedFondue);
}



module.exports = { index, show, create, update};