import { Injectable } from '@angular/core';
import { Programacao } from './progamacao';

@Injectable({
  providedIn: 'root',
})
export class ProgramacaoService {
  retrieveAll(): Programacao[] {
    return PRG;
  }
}

var PRG: Programacao[] = [
  {
    id: 1,
    nameprog: 'Bom Dia Cidade',
    presenter: 'Nathalia Assis',
    imageUrl: '/assets/Imagens/BomDiaCidade.jpg',
  },
  {
    id: 2,
    nameprog: 'EPTV Cidade',
    presenter: 'Talita Nonato/Marília Rastelli',
    imageUrl: '/assets/Imagens/EPTVCidade.jpg',
  },
  {
    id: 3,
    nameprog: 'Jornal da EPTV 1º Edição',
    presenter: 'Eduardo Brambilla',
    imageUrl: '/assets/Imagens/JornaldaEPTV1ED.jpg',
  },
  {
    id: 4,
    nameprog: 'Jornal da EPTV 1º Edição',
    presenter: 'Marcela Varani',
    imageUrl: '/assets/Imagens/JornaldaEPTV2ED.jpg',
  },
  {
    id: 5,
    nameprog: 'Mais Caminhos',
    presenter: 'Pedro Leonardo e Cris Ikeda',
    imageUrl: '/assets/Imagens/MaisCaminhos.jpg',
  },
  {
    id: 6,
    nameprog: 'Terra da Gente',
    presenter: 'Daniela Lemos',
    imageUrl: '/assets/Imagens/TerradaGente.jpg',
  },
];
