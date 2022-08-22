// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default function handler(req, res) {
  const url = 'https://api.api-ninjas.com/v1/nutrition'
  const { meal } = req.query
  console.log(meal)
  const call = axios.get(url, {
    params: {
      query: meal||'12 eggs',
    },
    headers: {
      'X-Api-Key': process.env.APININJA_API_KEY
    }
  })
  call.then(response => {
    res.statusCode = 200
    res.json(response.data)
  }).catch(error => {
    res.statusCode = 500
    res.json(error)
  })
}
