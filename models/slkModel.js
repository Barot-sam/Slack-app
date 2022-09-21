const slackModel = (...models) => {
    return {
        "blocks": [
            ...models
        ]
    }
}

module.exports = slackModel;