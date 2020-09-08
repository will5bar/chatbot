### IBM Watson

https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=dec913ac-8651-48e4-a596-928527ea31a0&serviceInstanceID=bef97a74-f2c8-4b7e-8348-164cd309cf7e


### passos de instalação

* clone o projeto: **git clone https://github.com/wills21/chatbot.git**
* execute o comando para instalar as dependencas: **npm i**


### como testar

execute o comando para executar o test: **npm run test**


### como Executar

execute o comando para inicializar o projeto: **npm start**

###############
###############


1* Crie uma Sessao de usuario fazendo um GET request na URL:

GET /getSession HTTP/1.1
Host: **
Cache-Control: no-cache

###############
###############


2* envei menssage oa Chatbot

POST /sendMsj HTTP/1.1
Host: **
Content-Type: application/json
Cache-Control: no-cache

{
	"msj" : "",
	"sessionId" : ""
}

REPONSE

{
    "message": "ok",
    "data": {
        "result": {
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
        }
    }
}


------
--DB
------

2* save Msg na DB

POST /saveMsj HTTP/1.1
Host: **
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 

{
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
        }

RESPONSE

{
    "message": "ok"
}


###############
###############

2* Get msg ID

POST /getMsjID/5ec6f076b6412501d2fc6f05 HTTP/1.1
Host: **
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: d5577ea0-069f-f327-07bb-d74d3e12ed8e

{
    "message": "ok",
    "data": {
        "result": {
            "_id": "5ec6f076b6412501d2fc6f05",
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
        }
    }
}

###############
###############

3* Get conversationId

POST /conversationId/123 HTTP/1.1
Host: **
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 

RESPONSE

{
    "message": "ok",
    "data": {
        "result": [
            {
                "_id": "5ec6f076b6412501d2fc6f05",
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
            },
            {
                "_id": "5ec6f92491f68d02f92781c8",
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
            }
        ]
    }
}

