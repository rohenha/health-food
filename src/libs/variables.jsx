import {
  HomeOutlined,
  PlusOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export const nav = [
  {
    url: '/app',
    title: 'Dashboard',
    icon: <HomeOutlined />,
    content: 'Dashboard',
  },
  {
    url: '/app/recipes/new',
    title: 'Nouvelle recette',
    icon: <PlusOutlined />,
    content: 'Ajouter',
  },
  {
    url: '/app/recipes/search',
    title: 'Rechercher une recette',
    icon: <SearchOutlined />,
    content: 'Rechercher',
  },
  {
    url: '/app/planning',
    title: 'Planning',
    icon: <CalendarOutlined />,
    content: 'Planning',
  },
  {
    url: '/app/recipes',
    title: 'Recettes',
    icon: <FolderOpenOutlined />,
    content: 'Mes recettes',
  },
  {
    url: '/app/account',
    title: 'Mon Compte',
    icon: <UserOutlined />,
    content: 'Moi',
  },
]

export const difficulties = [
  { value: '', name: 'Non précisé' },
  { value: 'easy', name: 'Facile' },
  { value: 'medium', name: 'Moyenne' },
  { value: 'hard', name: 'Difficile' },
]

export const prices = [
  { value: '', name: 'Non précisé' },
  { value: 'low', name: 'Low cost' },
  { value: 'middle', name: 'Moyen' },
  { value: 'high', name: 'Cher' },
]
