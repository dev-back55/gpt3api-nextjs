const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      temperature: 0,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 1000
    })

    res.status(200).json({ text: response.data.choices[0].text })
  } else {
    res.status(405).json({ text: "Ingresaste un prompt invalido." })
  }
}
