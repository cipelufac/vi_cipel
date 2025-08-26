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
  speaker?: string | null
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
      name: "Prof. Dr. José Pantoja",
      // position: "CEO",
      enterprise: "FMVZ UNESP-Botucatu",
      photo: "assets/speakers/pantoja.jpeg",
      // bio: "Bio do palestrante 1"
    },
    {
      name: "Dra. Jamilly Wesgueber",
      // position: "CTO",
      enterprise: "CEO JW Consultoria",
      photo: "assets/speakers/jamilly.jpg",
      // bio: "Bio do palestrante 2"
    },
    {
      name: "Kolowyskys Dantas",
      // position: "Analista",
      enterprise: "Presidente da Assoc. Brasileira de Buiatria",
      photo: "assets/speakers/kolo.jpg",
      // bio: "Bio do palestrante 3"
    },
    {
      name: "Nivaldo Michetti",
      enterprise: "Produtor rural"
    },
    {
      name: "Ernesto Coser",
      enterprise: "Méd. Veterinário e Gerente de Produtos da Datamars Trutest",
      photo: "assets/speakers/ernesto.jpg"
    },
    {
      name: "Andre Navarro",
      enterprise: "Gerente Distrital na Alta Genetics",
      photo: "assets/speakers/andre.jpg"
    },
    {
      name: "Felipe Moura",
      enterprise: "Pastus Agrotecnologia",
      photo: "assets/speakers/felipe.jpg"
    },
    {
      name: "IBGE",
      enterprise: null,
      photo: "assets/speakers/ibge.png"
    },
    {
      name: "SEBRAE-AC",
      enterprise: null,
      photo: "assets/speakers/sebrae.png"
    },
    {
      name: "Jaílson Barbosa",
      enterprise: "SEBRAE-AC"
    },
    {
      name: "Dr. Judson Valentim",
      enterprise: "EMBRAPA-AC"
    },
    {
      name: "Prof. Vadick Fernandez Romero ",
      enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru"
    },
    {
      name: "Prof. Juan Tomás Bejarano Alvaréz",
      enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru"
    },
    {
      name: "Dr. Moacyr Dias Filho",
      enterprise: "EMBRAPA-BELÉM",
      photo: "assets/speakers/moacyr.jpeg"
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
          startTime: "08:30 - 09:00",
          title: "Abertura",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "09:00 - 09:30",
          title: "Dados da Pecuária Leiteira no Acre - IBGE",
          speaker: this.palestrantes[7].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "09:30 - 10:00",
          title: "Projeto de Pecuária de Leite do Sebrae",
          speaker: this.palestrantes[8].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "10:00 - 10:30",
          title: "Sucessão Familiar em Propriedades Rurais",
          speaker: this.palestrantes[9].name,
          type: "pausa",
          description: null
        },
        {
          startTime: "10:45 - 12:00",
          title: "Pecuária Leiteira no Acre: Histórico, desafios e oportunidades",
          speaker: this.palestrantes[10].name,
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
          startTime: "14:00 - 15:00",
          title: "Controle Biológico de Carrapatos com Fungos",
          speaker: this.palestrantes[11].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "15:00 - 16:00",
          title: "Como Criar Bezerras Leiteiras",
          speaker: this.palestrantes[1].name,
          type: "workshop",
          description: null
        },
        {
          startTime: "16:00 - 16:30",
          title: "Milk Break",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "16:30 - 17:30",
          title: "Protocolos IATF na Pecuária Leiteira: utilização e benefícios",
          speaker: this.palestrantes[12].name,
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
          startTime: "08:00 - 09:00",
          title: "Café da manhã e Apresentação de Resumos",
          speaker: null,
          type: "abertura",
          description: null
        },
        {
          startTime: "09:00 - 10:00",
          title: "A Diferença entre Ver e Enxergar Seu Pasto: Estratégias de manejo",
          speaker: this.palestrantes[6].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "10:00 - 11:00",
          title: "Degradação de Pastagens na Amazônia",
          speaker: this.palestrantes[13].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "11:00 - 12:00",
          title: "Uso da Cerca Elétrica como Ferramenta para Otimizar a Eficiência do Pastejo",
          speaker: this.palestrantes[4].name,
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
          startTime: "14:00 - 15:00",
          title: "Novas Abordagens no Tratamento da Mastite",
          speaker: this.palestrantes[0].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "15:00 - 16:00",
          title: "Indicadores Reprodutivos e a Importância Econômica em Fazendas Leiteiras",
          speaker: this.palestrantes[5].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "16:00 - 16:30",
          title: "Milk Break",
          speaker: null,
          type: "pausa",
          description: null
        },
        {
          startTime: "16:30 - 17:30",
          title: "Mudando de Vida com a Produção de Leite",
          speaker: this.palestrantes[3].name,
          type: "palestra",
          description: null
        },
        {
          startTime: "17:30 - 18:00",
          title: "Premiação dos Melhores Resumos",
          speaker: null,
          type: "encerramento",
          description: null
        },
        {
          startTime: "18:00 - 23:00",
          title: "Confraternização",
          speaker: null,
          type: "encerramento",
          description: null
        }
      ]
    },

    {
      date: "01/11/2025",
      day: "Sábado",
      sessions: [
        {
          startTime: "08:00 - 12:00",
          title: "Dia de Campo",
          speaker: this.palestrantes[0].name,
          type: "abertura",
          description: null
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
