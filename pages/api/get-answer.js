const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  try {

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      temperature: 0,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 1000
    })

    console.log(response.data.choices[0].text)
    res.status(200).json({ text: response.data.choices[0].text })
  }catch(error) {
    res.status(405).json({ text: error })
  }
}