import Navbar from '@components/organisms/navbar'

export default function Layout({ children, className }) {
  const nav = [
    { url: '/dashboard', title: 'Accueil', content: 'Ç' },
    { url: '/new', title: 'New', content: 'k' },
    { url: '/planning', title: 'Planning', content: 'f' },
    { url: '/recipes', title: 'Recettes', content: 'S' },
    { url: '/', title: 'Compte', content: 'p' },
  ]

  return (
    <div className={className}>
      {children}
      <Navbar nav={nav} />
    </div>
  )
}
