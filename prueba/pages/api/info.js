import data from "../../data/data.json"
export default function Info(req, res) {
    res.status(200).json({ data })
    console.log(data)
  }
