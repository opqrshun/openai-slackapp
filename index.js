import SlackBot from '@slack/bolt';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
const { App } = SlackBot;

dotenv.config();

const openAiConfiguration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openAiConfiguration);

const openApiSearch = async (text) => {
  let rsp = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: text,
    temperature: 0.9,
    max_tokens: 1024,
    top_p: 1.0,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return rsp.data.choices[0].text;
};

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event('app_mention', async ({ event, say }) => {
  try {
    let rsp = await openApiSearch(event.text);
    await say(`<@${event.user}>: ${rsp}`);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
