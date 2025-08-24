import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  eventInfo = {
    title: "VI Congresso Internacional de Pecuária Leiteira da Amazônia Ocidental",
    subtitle: "VI CIPEL",
    date: "30 de Outubro a 01 de Novembro de 2025",
    location: "Acre, Brasil",
    description:
      "Desafios e Oportunidades na Pecuária Leiteira Rumo a Um Futuro Resiliente.",
    highlights: [
      "Palestrantes nacionais e internacionais",
      "Palestras informativas e técnicas",
      "Soluções científicas e tecnológicas para os desafios da produção leiteira",
      "Networking estratégico e novas oportunidades de mercado para o setor",
    ],
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
