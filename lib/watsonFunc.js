const { customError } = require("./error.js");
const { Watson } = require("./watsonConf.js");
const config = require("./config.js");

//--------------------------
//--------------------------

//-------
// SESSION
//-------

// Select Data
const watsonSession = async () => {
  try {
    // Conection DB
    const session = await Watson.createConection();

		return session;

  } catch (e) {
    throw customError("Error watsonSession", "watsonSession", 500, e);
  }
};

//-------
// MSJ
//-------

// Msj
const watsonMsj = async (msj , sessionId) => {
  try {
    // Conection DB
    const { result } = await Watson.sendMsj(msj , sessionId);

		return result;

  } catch (e) {
    throw customError("Error watson", "watsonMsj", 500, e);
  }
};


//-------------------------------------------------
//-------------------------------------------------

module.exports.watsonSession = watsonSession;
module.exports.watsonMsj = watsonMsj;
