// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

const axios = require('axios').default;

const token = process.env.TELEGRAM_TOKEN
const group = process.env.TELEGRAM_GROUP

export default function handler(
  req, //: NextApiRequest,
  res, //: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    // const body = JSON.parse(req.body)
    const { name, email, message } = req.body || {}
    const msg = `Name: ${name}\nEmail: ${email}\nMessage\n${message}`
    console.log('got', msg)

    const encoded = encodeURIComponent(msg)
    // console.log(encoded)

    axios
      .get(`https://api.telegram.org/${token}/sendMessage?chat_id=${group}&text=${encoded}`)
      .finally(()=>{
        res.status(200).json({})
      })

    
    return
  }
  console.log('not acceptable')
  res.status(200).json({})
  // res.status(200).json({ name: 'John Doe' })
}
