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
      name: "Embrapa",
      logo: "logo1.png",
    },
    {
      name: "Seagro",
      logo: "logo2.png",
    },
    {
      name: "Seagri",
      logo: "logo3.png",
    },
    {
      name: "Fórum de Desenvolvimento",
      logo: "logo4.png",
    },
    {
      name: "SENAR/FIEAC",
      logo: "logo5.png"
    },
    {
      name: "SEBRAE",
      logo: "logo6.png"
    },
    {
      name: "UFAC",
      logo: "logo5.png"
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


  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
