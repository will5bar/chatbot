const express = require("express");

const { customError } = require("./../../lib/error.js");

const { watsonSession } = require("./../../lib/watsonFunc.js");


const router = express.Router();

//-----------------------------------
//-----------------------------------

// router.post('/getData', sessionApp, async (req, res, next) => {
router.get(
  "/getSession",
  //sessionApp,
  async (req, res, next) => {
    try {

      console.log('getSession');

      const session = await watsonSession();
      
      // Respuesta al Front
      res.locals.responseSend = { message: "ok" , data : { 'sessionID' : session} };
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



module.exports.routerSession = router;
