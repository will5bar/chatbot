const express = require("express");

const { customError } = require("./../../lib/error.js");

const {ObjectID} = require("mongodb"); // or ObjectID 
const { insertOne , findOne , findCon } = require("./../../lib/mongoFunc.js");

const router = express.Router();

//-----------------------------------
//-----------------------------------

// router.post('/getData', sessionApp, async (req, res, next) => {
router.post(
  "/saveMsj",
  //sessionApp,
  async (req, res, next) => {
    try {

      const msj = req.body;

      const result = await insertOne("msj_chatbot",msj);

      // Respuesta al Front
      res.locals.responseSend = { message: "ok" };
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


// router.post('/getData', sessionApp, async (req, res, next) => {
router.post(
  "/getMsjID/:id",
  //sessionApp,
  async (req, res, next) => {
    try {

      const id = req.params.id;

      const result = await findOne("msj_chatbot",{ _id: new ObjectID(id) });

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

router.post(
  "/conversationId/:conversationId",
  //sessionApp,
  async (req, res, next) => {
    try {

      const conversationId = req.params.conversationId;

      const result = await findCon("msj_chatbot", { conversationId } );

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


module.exports.routerMsj = router;
