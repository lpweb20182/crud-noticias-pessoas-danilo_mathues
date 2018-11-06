import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-admin-cadastrar-noticia',
  templateUrl: './admin-cadastrar-noticia.component.html',
  styleUrls: ['./admin-cadastrar-noticia.component.css']
})
export class AdminCadastrarNoticiaComponent implements OnInit {
  titulo = null;
  autores = null;
  autor = null;
  resumo = null;
  conteudo = null;
  data = null;
  destaque = false;
  publicada = false;
  salvar_ok = false;
  salvar_erro = false;
  imagem = null;


  constructor(private noticias_service: NoticiasService, private autores_service: AutoresService) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
  }
  /**onFileSelected(event){
    this.imagem = event.target.files[0];

  }**/

  salvar() {
    //this.noticias_service.salvar_imagem(this.imagem).subscribe()

      this.noticias_service.salvar(this.titulo, this.resumo, this.conteudo, this.autor ,this.data, this.publicada, this.destaque).subscribe(
        noticia => {
          this.salvar_ok = true;
        },
        erro => {
          console.log(erro);
          this.salvar_erro = true;
        }
      );

  }
}
