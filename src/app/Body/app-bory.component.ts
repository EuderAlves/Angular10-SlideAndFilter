import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Programacao } from '../Body/progamacao';
import { ProgramacaoService } from '../Body/programacao.service.compoments';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  filterprogramacao: Programacao[] = [];

  _programacao: Programacao[] = [];

  _filterBy!: string;

  constructor(private programacaoService: ProgramacaoService) {}

  ngOnInit(): void {
    this._programacao = this.programacaoService.retrieveAll();
    this.filterprogramacao = this._programacao;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filterprogramacao = this._programacao.filter(
      (programacao: Programacao) =>
        programacao.nameprog
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
