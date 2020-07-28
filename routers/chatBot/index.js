const express = require("express");

const { customError } = require("./../../lib/error.js");

const { watsonMsj } = require("./../../lib/watsonFunc.js");

const router = express.Router();

//-----------------------------------
//-----------------------------------

// router.post('/getData', sessionApp, async (req, res, next) => {
router.post(
  "/sendMsj",
  //sessionApp,
  async (req, res, next) => {
    try {

      const { msj , sessionId } = req.body;

      const result = await watsonMsj(msj,sessionId);

      // Respuesta al Front
      res.locals.responseSend = { message: "ok" , data : { result } };
      res.locals.responseCode = 200;

      // call the responseÂ´s log middleware
      next();
    } catch (e) {
      //console.log('Error occurred');
      // call the Error middleware
      next(e);
    }
  }
);



module.exports.routerChatBot = router;
