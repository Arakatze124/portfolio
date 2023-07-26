const Joi = require('joi');
const express = require('express');
const { use } = require('express/lib/application');
const app = express();

app.use(express.json());

const games = [];

app.get('/', (req, res) => {
    res.send('API working.');
});

app.get('/api/games', (req, res) => {
    res.send(games);
});

app.get('/api/games/:id', (req, res) => {
    const { id } = req.params;
    const gameId = parseInt(id, 10);
    const game = games.find((game) => game.id === gameId);

    if (!game) {
        return res.status(404).send('Game not found.');
    }

    res.send(game);
});

app.post('/api/games', async (req, res) => {
    const schema = Joi.object({
        id: Joi.required(),
        settings: {
            zoneRadius: Joi.required(),
            shrinkingTime: Joi.required(),
        },
        users: Joi.array().items(
            Joi.object({
                name: Joi.string().required(),
            })
        )
    })

    try {
        const validatedData = await schema.validateAsync(req.body);
        const game = {
            id: validatedData.id,
            settings: {
                zoneRadius: validatedData.settings.zoneRadius,
                shrinkingTime: validatedData.settings.shrinkingTime,
            },
            users: [
                {
                    name: req.body.users[0].name,
                    latitude: 0,
                    longitude: 0,
                    alive: true
                }
            ]
        };

        const existingGame = games.find((gameTest) => gameTest.id === game.id);
        if (existingGame) {
            return res.status(409).send('Game Code already in use.');
        }

        games.push(game);
        res.send(game);
    } catch (error) {
        res.status(400).send(error.details[0].message);
    }
});

app.post('/api/games/:id/users', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const gameId = parseInt(id, 10);

    const schema = Joi.object({
        name: Joi.string().required(),
    });

    try {
        await schema.validateAsync({ name });
        const game = games.find((game) => game.id === gameId);
        if (!game) {
            return res.status(404).send('Game not found.');
        }

        const existingUser = game.users.find((user) => user.name === name);
        if (existingUser) {
            return res.status(409).send('User name already taken.');
        }

        const newUser = {
            name: name,
            latitude: 0,
            longitude: 0,
            alive: true
        }  

        game.users.push(newUser);
        res.send(game);
    } catch (error) {
        res.status(400).send(error.details[0].message);
    }
});

app.put('/api/games/:id/users/:userID', (req, res) => {
    const { id, userID } = req.params;
    const { latitude, longitude, alive } = req.body;

    const game = games.find((game) => game.id === parseInt(id, 10));

    if (!game) {
        return res.status(404).send('Game not found.');
    }

    const user = game.users[parseInt(userID, 10)];

    if (!user) {
        return res.status(404).send('User not found in the game.');
    }

    user.latitude = latitude;
    user.longitude = longitude;
    user.alive = alive;

    res.send(user);
});

app.delete('/api/games/:id', async (req, res) => {
    const { id } = req.params;
    const gameId = parseInt(id, 10);
    const gameIndex = games.findIndex((game) => game.id === gameId);

    if (gameIndex === -1) {
        return res.status(404).send('Game not found.');
    }

    const deletedGame = games.splice(gameIndex, 1)[0];

    res.send(deletedGame);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));