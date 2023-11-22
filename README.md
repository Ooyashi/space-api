## Description

Space API is an API powered by LangChain LLM. This API has a POST endpoint `/process-text` which receives some commands from the cosmonaut and passes the answer to each given command.

This API can be used as AI-powered commands interpretator for space missions.

## Usage

First of all, make .env file with `OPENAI_API_KEY` key. The key itself will be provided by author or his representatives.

Then fire up the `/process-text` endpoint with the commands in request body (Postman - Body tab - Raw tab)

The request body looks like this:

```json
{
    "commands": ["Please, fire up the engine number 1", "Please, fire up the engine number 2"]
}
```

The CURL of this endpoint looks like this:

```
curl --location 'http://localhost:3000/process-text' \
--header 'Content-Type: application/json' \
--data '{
    "commands": ["Please, fire up the engine number 1", "Please, fire up the engine number 2"]
}'
```

There is no need to authorization, just use endpoint as it is.

The response of this endpoint looks like this:

```json
{
    "lc": 1,
    "type": "constructor",
    "id": [
        "langchain",
        "schema",
        "AIMessage"
    ],
    "kwargs": {
        "content": "Successfully fired up the engine number 1. \nSuccessfully fired up the engine number 2.",
        "additional_kwargs": {}
    }
}
```

## Installation

```bash
$ yarn install
```


## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```