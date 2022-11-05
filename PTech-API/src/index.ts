import express, { Request, Response } from 'express';
import PokemonRepositorio from './repositorio/pokemon.repositorio';
import PokemonControlador from './controladores/pokemon.controlador';

const controlador = new PokemonControlador();
const app = express();

app.use(express.json());

app.listen(8000, () => {
})

app.get('/', (req: Request, res: Response) => {
})

app.get('/pokemons/', controlador.listarTodos)
app.get('/pokemons/:nomePokemon', controlador.listaUmPokemon)

app.post('/pokemons', (req: Request, res: Response) => {
    try {
        const nome = req.body.nome;
        const tipo = req.body.tipo;
        const poder = req.body.poder;

        return res.json({ nome, tipo, poder });
    } catch (e) {
        return res.json({
            "mensagem": e
        })
    }
})