const slkActionBtn = {
    "type": "actions",
    "elements": [
        {
            "type": "button",
            "text": {
                "type": "plain_text",
                "text": "Send",
                "emoji": false
            },
            "style": "primary",
            "value": "click_me_123",
            "action_id": "send_gif"
        },
        {
            "type": "button",
            "text": {
                "type": "plain_text",
                "text": "Shuffel",
                "emoji": false
            },
            "value": "click_me_123",
            "action_id": "shuffel_gif"
        },
        {
            "type": "button",
            "text": {
                "type": "plain_text",
                "text": "Cancle",
                "emoji": false
            },
            "value": "click_me_123",
            "action_id": "cancle_gif"
        }
    ]
}

module.exports = slkActionBtn;