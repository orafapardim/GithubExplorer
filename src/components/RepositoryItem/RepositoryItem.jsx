import { FaGithub } from "react-icons/fa"

import './styles.scss'

export function RepositoryItem(props) {
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