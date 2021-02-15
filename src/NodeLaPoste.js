const fetch = require('node-fetch')

class NodeLaPoste {
  constructor() {}
  async search (id, lang) {
    try {
      if (!lang) lang = 'fr_FR'

      const infos = await fetch(`https://lycos-novation.fr/api/laposte/?id=${id}&?lang=${lang}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
      if (infos.returnCode !== 200) throw new Error(infos.returnMessage)
      return infos
    } catch (error) {
      throw new Error(error)
    }
  }
}
module.exports = NodeLaPoste
