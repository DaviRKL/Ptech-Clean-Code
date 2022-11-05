import express, { request, Request, Response } from 'express';
import PokemonRepositorio from '../repositorio/pokemon.repositorio';
const repositorio = new PokemonRepositorio();

export default class PokemonControlador {

    public listarTodos(req: Request, res: Response){
        try{
            const pokemons = repositorio.listarTodos();
            return res.json(pokemons);
       } catch (error){
           return res.json({
               "mensagem": error
           })
       }
    }
    
    public listaUmPokemon(req: Request, res: Response){
        try {
            const objPokemon = repositorio.listarPokemonsPeloNome(req.params.nomePokemon)
             return res.json(objPokemon);
         } catch (error) {
             return res.json({
                 "mensagem": error
             })
         }
    }

}

