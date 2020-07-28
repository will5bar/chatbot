
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const sinon = require('sinon');

const { MongoDB } = require("../../lib/mongoConnection.js");
const {findOne, findCon, insertOne} = require("../../lib/mongoFunc.js");


// findOne

describe('Mongo DB findOne OK', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            findOne: function(coll, data, projection) {
                return Promise.resolve({
                  "_id": {
                      "$oid": "5ec6f076b6412501d2fc6f05"
                  },
                  "conversationId": "123",
                  "output": {
                      "intents": [
                          {
                              "intent": "menu_hj",
                              "confidence": 1
                          }
                      ],
                      "entities": [],
                      "generic": [
                          {
                              "title": "Opcion Proteina",
                              "options": [
                                  {
                                      "label": "frango",
                                      "value": {
                                          "input": {
                                              "text": "frango"
                                          }
                                      }
                                  },
                                  {
                                      "label": "carne",
                                      "value": {
                                          "input": {
                                              "text": "carne"
                                          }
                                      }
                                  },
                                  {
                                      "label": "peixe",
                                      "value": {
                                          "input": {
                                              "text": "peixe"
                                          }
                                      }
                                  }
                              ],
                              "response_type": "option"
                          }
                      ]
                  }
              });
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('check findOne', async () => {    
        const response = await findOne('msj_chatbot', {conversationId: '123'}, {});
        response.conversationId.should.equal('123');
    });
});

describe('Mongo DB findOne retorna null', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            findOne: function(coll, data, projection) {
                return Promise.resolve(null);
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('findOne retorna null', async () => {   
        const response = await findOne('msj_chatbot', {conversationId: '1234'}, {});
        expect(response).to.equal(null);

    });
});


describe('Mongo DB findOne Error', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            findOne: function(coll, data, projection) {
                return Promise.reject({message: "Error"});
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('Error no findOne', async () => {   
        try { 
            await findOne('msj_chatbot', {conversationId: '1234'}, {});
        } catch(e) {
            e.message.should.equal("Error MongoDB");
            e.method.should.equal("findOne");
        }
    });
});


/// findCon

describe('Mongo DB findCon OK', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            find: function(coll, data, projection) {
                return { 
                  toArray: () => 
                  
                    Promise.resolve({
                        "_id": {
                            "$oid": "5ec6f076b6412501d2fc6f05"
                        },
                        "conversationId": "324",
                        "output": {
                            "intents": [
                                {
                                    "intent": "menu_hj",
                                    "confidence": 1
                                }
                            ],
                            "entities": [],
                            "generic": [
                            ]
                        }
                  })
              
              }
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('check findCon', async () => {    
        const response = await findCon('msj_chatbot', {conversationId: '324'}, {});
        //console.log(response)
        response.conversationId.should.equal('324');
    });
});

describe('Mongo DB findCon retorna null', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            find: function(coll, data, projection) {
                return  {
                  toArray: () => Promise.resolve(null)
                }
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('findCon retorna null', async () => {   
        const response = await findCon('msj_chatbot', {conversationId: '1234'}, {});
        expect(response).to.equal(null);

    });
});


describe('Mongo DB findCon Error', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            find: function(coll, data, projection) {
                return Promise.reject({message: "Error"});
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('Error no findCon', async () => {   
        try { 
            await findCon('msj_chatbot', {conversationId: '1234'}, {});
        } catch(e) {
            e.message.should.equal("Error MongoDB");
            e.method.should.equal("findCon");
        }
    });
});



// insert

const data = {
    "conversationId": "123",
    "output": {
        "intents": [
            {
                "intent": "menu_hj",
                "confidence": 1
            }
        ],
        "entities": [],
        "generic": [
            {
                "title": "Opcion Proteina",
                "options": [
                    {
                        "label": "frango",
                        "value": {
                            "input": {
                                "text": "frango"
                            }
                        }
                    },
                    {
                        "label": "carne",
                        "value": {
                            "input": {
                                "text": "carne"
                            }
                        }
                    },
                    {
                        "label": "peixe",
                        "value": {
                            "input": {
                                "text": "peixe"
                            }
                        }
                    }
                ],
                "response_type": "option"
            }
        ]
    }
};


describe('Mongo DB insertOne OK', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            insertOne: function(data) {
                return Promise.resolve(
                    {
                        ops:[
                                {
                                    _id: '5e76327a94f20c21a08b0410',
                                    ...data
                                }
                            ]
                    });
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('check insertOne', async () => {    
        const {ops: [result]} = await insertOne('msj_chatbot', data);
        
        result._id.should.equal('5e76327a94f20c21a08b0410');
    });
});


describe('Mongo DB insertOne Error', () => {
    let mongo;
    beforeEach(async () => {
        // get the DB
        const db = await MongoDB.createConection();
        // stub the collection
        mongo = sinon.stub(db, "collection").returns({
            insertOne: function(data) {
                return Promise.reject({message: "Error"});
            }
        });
      });
      afterEach(() => {
        mongo.restore();
      });

    it('Error no insertOne', async () => {   
        try { 
            await insertOne('msj_chatbot', data)
        } catch(e) {
            e.message.should.equal("Error MongoDB");
            e.method.should.equal("insertOne");
        }
 
    });
});