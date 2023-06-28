import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-DUMYwYl3a1EG1bl3ULUgGOwz",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// let my_proxy = {
//     'http': 'http://localhost:7890',
//     'https': 'http://localhost:7890'
//     }
let my_proxy = {
    host: '127.0.0.1',
    port: '7890'
}
openai.proxy = my_proxy
const response = await openai.listEngines();
console.log(response);

