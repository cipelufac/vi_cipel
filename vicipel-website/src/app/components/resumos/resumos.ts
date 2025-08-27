import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resumos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumos.html',
  styleUrl: './resumos.scss'
})
export class Resumos {
  linkSubmissao = "https://www.even3.com.br/cipel-vi-congresso-internacional-de-pecuaria-leiteira-da-amazonia-ocidental-568857/"
  linkTemplate = "assets/downloads/template_resumos.docx"

  constructor() {}

}
