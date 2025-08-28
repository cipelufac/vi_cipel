import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Palestrante {
  name: string
  // position: string
  enterprise: string | null
  photo?: string
  // bio: string
}

interface Sessao{
  startTime: string
  title: string
  speaker?: string[] | null
  type: "palestra" | "workshop" | "pausa" | "abertura" | "encerramento"
  description: string | null
}

interface DiaEvento {
  date: string
  day: string
  sessions: Sessao[]
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss'
})
export class Schedule {
  activeTab = "dia1"

  palestrantes: Palestrante[] = [
    {
      //0
      name: "Prof. Dr. José Pantoja",
      // position: "CEO",
      enterprise: "FMVZ UNESP-Botucatu",
      photo: "assets/speakers/pantoja.jpeg",
      // bio: "Bio do palestrante 1"
    },
    {
      //1
      name: "Dra. Jamilly Wesgueber",
      // position: "CTO",
      enterprise: "CEO JW Consultoria",
      photo: "assets/speakers/jamilly.jpg",
      // bio: "Bio do palestrante 2"
    },
    {
      //2
      name: "Kolowyskys Dantas",
      // position: "Analista",
      enterprise: "Presidente da Assoc. Brasileira de Buiatria",
      photo: "assets/speakers/kolo.jpg",
      // bio: "Bio do palestrante 3"
    },
    {
      //3
      name: "Nivaldo Michetti",
      enterprise: "Produtor rural",
      photo: "assets/speakers/nivaldo.jpg"
    },
    {
      //4
      name: "Med. Vet. Ernesto Coser",
      enterprise: "Méd. Veterinário e Gerente de Produtos da Datamars Trutest",
      photo: "assets/speakers/ernesto2.jpg"
    },
    {
      //5
      name: "André Navarro",
      enterprise: "Gerente Distrital na Alta Genetics",
      photo: "assets/speakers/andre.jpg"
    },
    {
      //6
      name: "Felipe Moura",
      enterprise: "Pastus Agrotecnologia",
      photo: "assets/speakers/felipe.jpg"
    },
    // {
    //   //7
    //   name: "IBGE",
    //   enterprise: null,
    //   photo: "assets/speakers/ibge.png"
    // },
    // {
    //   //8
    //   name: "SEBRAE-AC",
    //   enterprise: null,
    //   photo: "assets/speakers/sebrae.png"
    // },
    {
      //7
      name: "Jaílson Barbosa",
      enterprise: "SEBRAE-AC",
      photo: "assets/speakers/jailson.jpg"
    },
    {
      //8
      name: "Dr. Judson Valentim",
      enterprise: "EMBRAPA-AC",
      photo: "assets/speakers/judson.jpg"
    },
    {
      //9
      name: "Prof. Vadick Fernandez Romero ",
      enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru",
      photo: "assets/speakers/vadick.jpg"
    },
    {
      //10
      name: "Prof. Juan Tomás Bejarano Alvaréz",
      enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru",
      photo: "assets/speakers/juan.jpg"
    },
    {
      //11
      name: "Sra. Maria do Carmo",
      enterprise: "Produtora rural",
      photo: "assets/speakers/maria2.jpg"
    },
    {
      //12
      name: "Med. Vet. Jean Paulo Gotelip",
      enterprise: "Norte Rebanho",
      photo: "assets/speakers/jean.jpg"
    },
    {
      //13
      name: "Sr. Maurício Gomes",
      enterprise: "Produtor rural",
      photo: "assets/speakers/mauricio.jpg"
    },
    {
      //14
      name: "Sra. Andreza Scherlosk",
      enterprise: "Produtora rural",
      photo: "assets/speakers/andrezza.jpg"
    },
    {
      //15
      name: "Sr. Rodrigo Novaes",
      enterprise: "Produtor rural",
      photo: "assets/speakers/rodrigo.jpg"
    }
  ]

  programacao: DiaEvento[] = [
    {
      date: "30/10/2025",
      day: "Quinta-feira",
      sessions: [
        {
          startTime: "07:00 - 08:45",
          title: "Café da manhã e credenciamento",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "07:30 - 08:30",
          title: "Apresentação de resumos",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "08:30 - 09:30",
          title: "Abertura",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "09:30 - 10:00",
          title: "Sucessão Familiar em Propriedades Rurais",
          speaker: [this.palestrantes[7].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "10:00 - 11:00",
          title: "Quais as vantagens e os desafios da utilização da transferência de embriões em gado leiteiro? ",
          speaker: [this.palestrantes[12].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "11:00 - 12:00",
          title: "Pecuária Leiteira no Acre: Histórico, desafios e oportunidades ",
          speaker: [this.palestrantes[8].name],
          type: "pausa",
          description: null
        },
        {
          startTime: "12:00 - 14:00",
          title: "Almoço",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "14:00 - 15:00",
          title: "Uso da cerca elétrica como ferramenta para otimizar a eficiência do pastejo ",
          speaker: [this.palestrantes[4].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "15:00 - 16:10",
          title: "Controle biológico de carrapatos com fungos ",
          speaker: [this.palestrantes[9].name],
          type: "workshop",
          description: null
        },
        {
          startTime: "16:10 - 16:30",
          title: "Milk Break",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "16:30 - 17:30",
          title: "Protocolos IATF na Pecuária Leiteira: utilização e benefícios",
          speaker: [this.palestrantes[10].name],
          type: "palestra",
          description: null
        },
      ]
    },

    {
      date: "31/10/2025",
      day: "Sexta-feira",
      sessions: [
        {
          startTime: "07:30 - 08:30",
          title: "Café da manhã e Apresentação de Resumos",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "08:00 - 09:30",
          title: "A Diferença entre Ver e Enxergar Seu Pasto: Estratégias de manejo",
          speaker: [this.palestrantes[6].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "09:40 - 10:40",
          title: "Manejos primordiais na criação de bezerras",
          speaker: [this.palestrantes[1].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "10:50 - 11:50",
          title: "Atuação do Buiatra em Medicina Veterinária de Produção",
          speaker: [this.palestrantes[2].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "12:00 - 14:00",
          title: "Almoço",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "14:00 - 14:50",
          title: "Indicadores Reprodutivos e a importância econômica em fazendas leiteiras ",
          speaker: [this.palestrantes[5].name],
          type: "palestra",
          description: null
        },
        {
          startTime: "15:00 - 16:00",
          title: "Experiências do campo – Produtores de leite do Acre",
          speaker: [
            this.palestrantes[11].name,
            this.palestrantes[13].name,
            this.palestrantes[14].name,
            this.palestrantes[15].name
          ],
          type: "palestra",
          description: null
        },
        {
          startTime: "16:00 - 16:20",
          title: "Milk Break",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "16:20 - 17:00",
          title: "Mudando de Vida com a Produção de Leite",
          speaker: [
            this.palestrantes[3].name
          ],
          type: "palestra",
          description: null
        },
      ]
    },

    {
      date: "01/11/2025",
      day: "Sábado",
      sessions: [
        {
          startTime: "08:00 - 12:00",
          title: "Dia de Campo - Rancho São Bento (Rio Branco)",
          speaker: [this.palestrantes[0].name],
          type: "abertura",
          description: "Estações: Manejo de Pastagens; Reprodução; Qualidade de leite"
        },
      ]
    }
  ]

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getTipoClass(tipo: string): string {
    const classes = {
      palestra: "border-start border-primary border-4",
      workshop: "border-start border-warning border-4",
      pausa: "border-start border-secondary border-4",
      abertura: "border-start border-success border-4",
      encerramento: "border-start border-danger border-4",
    }
    return classes[tipo as keyof typeof classes]  || ""
  }
}
