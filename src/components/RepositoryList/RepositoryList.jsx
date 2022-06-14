import { useState, useEffect } from "react"

import { RepositoryItem } from "../RepositoryItem/RepositoryItem"

import './styles.scss'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/orafapardim/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h2>Lista de repositórios de Rafael Pardim</h2>

      <ul>
        {repositories.length >= 0 ? repositories.map(repository => <RepositoryItem key={repository.id} repository={repository}/>) : <span>Não há repositórios para esse usuário.</span>}
      </ul>

    </section>
  )
}