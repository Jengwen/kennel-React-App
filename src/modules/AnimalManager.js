const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  softDelete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({archived: true})
    })
    .then(result => result.json())
  }
}