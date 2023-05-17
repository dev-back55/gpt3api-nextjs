const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "512x512"
    })

    res.status(200).json({ text: response.data.data[0].url })
  } else {
    res.status(400).json({ text: "Parece que hubo un error" })
  }
}
