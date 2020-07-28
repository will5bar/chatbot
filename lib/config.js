const convict = require("convict");

// Define a schema
const config = convict({
  port: {
    ini: 4000
  },
  json: {
    limit: "10mb"
  },
  DB: {
    url: ""
  },
  watson: {
    apikey: "",
    assistantId: "",
    url: "https://gateway.watsonplatform.net/assistant/api/"
  }
});

module.exports = config;
