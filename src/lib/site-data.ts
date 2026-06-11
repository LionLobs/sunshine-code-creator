import {
  Trophy,
  Users,
  Target,
  Shield,
  Flame,
  Crown,
  Megaphone,
  Heart,
  Handshake,
} from "lucide-react";

export const logo = "/assets/logo.png";
export const heroBg = "/assets/photos/action-1.jpg";
export const teamBg = "/assets/photos/team-3.jpg";
export const ballBg = "/assets/photos/spike.jpg";

export const instaPhotos = [
  "/assets/photos/team-1.jpg",
  "/assets/photos/spike.jpg",
  "/assets/photos/team-2.jpg",
  "/assets/photos/block.jpg",
  "/assets/photos/huddle.jpg",
  "/assets/photos/action-1.jpg",
  "/assets/photos/group.jpg",
  "/assets/photos/team-4.jpg",
];

export const categories = [
  {
    age: "SUB-17",
    desc: "A base que constrói o futuro. Atletas entre 15 e 17 anos em formação técnica e mental.",
    icon: Flame,
  },
  {
    age: "SUB-19",
    desc: "A geração de transição. Disputando campeonatos estaduais e regionais de alto nível.",
    icon: Shield,
  },
  {
    age: "SUB-21",
    desc: "A elite da base. Pré-profissional, preparando atletas para o cenário nacional.",
    icon: Crown,
  },
];

export const values = [
  {
    icon: Trophy,
    title: "Alto Desempenho",
    desc: "Treinos às terças e quintas com metodologia profissional e cobrança real.",
  },
  {
    icon: Users,
    title: "Formação Humana",
    desc: "Disciplina, respeito e responsabilidade dentro e fora de quadra.",
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    desc: "Cada temporada com metas claras — estaduais, regionais e nacionais.",
  },
  {
    icon: Shield,
    title: "Time Oficial",
    desc: "Reconhecido pela Prefeitura de Florianópolis.",
  },
];

export const achievements = [
  { year: "2024", title: "Fundação do time Elite", place: "Florianópolis · SC" },
  { year: "2024", title: "Primeira temporada de treinos", place: "Categorias Sub-17 a Sub-21" },
  { year: "2025", title: "Estreia em competições estaduais", place: "Santa Catarina" },
  { year: "2026", title: "Temporada em andamento", place: "Estadual · Regional · Nacional" },
];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "O Time" },
  { to: "/categorias", label: "Categorias" },
  { to: "/conquistas", label: "Conquistas" },
  { to: "/patrocinadores", label: "Patrocinadores" },
  { to: "/contato", label: "Contato" },
] as const;

export const sponsorTiers = [
  {
    name: "BRONZE",
    icon: Heart,
    price: "Apoiador",
    highlight: false,
    benefits: [
      "Logo na seção de apoiadores do site",
      "Menção em post de agradecimento no Instagram",
      "Foto oficial com o time",
    ],
  },
  {
    name: "PRATA",
    icon: Handshake,
    price: "Parceiro",
    highlight: true,
    benefits: [
      "Logo médio em destaque no site e uniforme de treino",
      "3 posts dedicados por temporada no Instagram",
      "Presença em divulgação de jogos e competições",
      "Material institucional do time co-branded",
    ],
  },
  {
    name: "OURO",
    icon: Megaphone,
    price: "Patrocinador Master",
    highlight: false,
    benefits: [
      "Logo principal no uniforme oficial de jogo",
      "Presença em todas as comunicações da temporada",
      "Conteúdo exclusivo (vídeos, bastidores, depoimentos)",
      "Ativação de marca em eventos e jogos em casa",
      "Reportagem e mídia espontânea (imprensa local)",
    ],
  },
];

export const sponsorReasons = [
  {
    icon: Users,
    title: "Alcance jovem & local",
    desc: "Atletas, famílias e comunidade esportiva da Grande Florianópolis acompanhando o time.",
  },
  {
    icon: Target,
    title: "Marca associada a esporte",
    desc: "Valores de disciplina, superação e formação humana atrelados à sua marca.",
  },
  {
    icon: Trophy,
    title: "Projeto em crescimento",
    desc: "Time novo (2024), com expansão para competições estaduais e nacionais — entrada em momento estratégico.",
  },
];
