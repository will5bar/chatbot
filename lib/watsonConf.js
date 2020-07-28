const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const config = require("./config.js");
const { customError } = require("./error.js");


// Class Watson
class Watson {
    _wat; 

    constructor() {}

    async createConection()  {
      try {
        if (this._wat) {
          
          const session = await this.createSession();

          return session;
        }

        this._wat = new AssistantV2({
          version: '2020-04-01',
          authenticator: new IamAuthenticator({
            apikey: config.get("watson.apikey")
          }),
          url: config.get("watson.url")
        });

        const session = await this.createSession();

        return session;
      } catch (e) {
        throw customError("Error watson", "createConection", 500, e);
      }
    }


    async createSession()  {
      try {

        const {result: {session_id: session}} = await this._wat.createSession({
          assistantId: config.get("watson.assistantId")
        })

        return session;

      } catch (e) {
       throw customError("Error watson", "createSession", 500, e);
      }
    }


    async sendMsj(msj , sessionId)  {
      try {

        const result = await this._wat.message(
        {
          input: { text: msj },
          assistantId: config.get("watson.assistantId"),
          sessionId
        });

        return result;

      } catch (e) {
       throw customError("Error watson", "createSession", 500, e);
      }
    }

    
}

module.exports.Watson = new Watson();