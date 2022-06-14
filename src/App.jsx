import { RepositoryList } from './components/RepositoryList/RepositoryList'
import { Header } from './components/Header/Header'

import './styles/global.scss'

export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
    </>
  )
}