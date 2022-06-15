import { FaGithub } from "react-icons/fa"

import './styles.scss'

interface RepositoryItemProps {
  repository: {
    description: string
    id: number
    html_url: string
    name: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <div>
        <FaGithub />
        <h3>{props.repository.name}</h3>
      </div>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
    </li>
  )
}