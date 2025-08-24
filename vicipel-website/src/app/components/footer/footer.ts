import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Contato {
  type: string
  value: string
  icon: string
  link?:string
}

interface Patrocinador {
  name: string
  logo: string
  category: "ouro" | "prata" | "bronze" | "apoio"
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  contatos: Contato[] = [
    {
      type: "Email",
      value: "contato@vicipel.com",
      icon: "fas fa-envelope",
      link: "mailto:contato@vicipel.com"
    },

    {
      type: "Telefone",
      value: "(11) 98765-4321",
      icon: "fas fa-phone",
      link: "tel:+5511987654321"
    },

    {
      type: "WhatsApp",
      value: "(11) 98765-4321",
      icon: "fab fa-whatsapp",
      link: "https://wa.me/5511987654321"
    },

    {
      type: "Endereço",
      value: "Rodovia BR 364, Km 04, Distrito Industrial, Universidade Federal do Acre",
      icon: "fas fa-map-marker-alt"
    },
  ]
  
  patrocinadores: Patrocinador[] = [
    {
      name: "Patrocinador 1",
      logo: "logo1.png",
      category: "ouro"
    },
    {
      name: "Patrocinador 2",
      logo: "logo2.png",
      category: "prata"
    },
    {
      name: "Patrocinador 3",
      logo: "logo3.png",
      category: "bronze"
    },
    {
      name: "Patrocinador 4",
      logo: "logo4.png",
      category: "apoio"
    }
  ]

  redesSociais = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/vicipel"
    },

    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/company/vicipel"
    }
  ]

  patrocinadoresOuro: Patrocinador[] = [];
  patrocinadoresPrata: Patrocinador[] = [];
  patrocinadoresBronze: Patrocinador[] = [];
  patrocinadoresApoio: Patrocinador[] = [];

  constructor() {}

  ngOnInit(): void {
    this.patrocinadoresOuro = this.patrocinadores.filter(p => p.category === 'ouro');
    this.patrocinadoresPrata = this.patrocinadores.filter(p => p.category === 'prata');
    this.patrocinadoresBronze = this.patrocinadores.filter(p => p.category === 'bronze');
    this.patrocinadoresApoio = this.patrocinadores.filter(p => p.category === 'apoio');
  }


  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getPatrocinadoresPorCategoria(categoria: string):
  Patrocinador[] {
    return this.patrocinadores.filter(p => p.category === categoria);
  }
}
