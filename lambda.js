var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

var RECEIVER = "example@gmail.com";    
var SENDER = "dineshkumar.d232005@gmail.com";  

exports.handler = async function (event) {
    console.log("Received event:", event);

    try {
        
        const body = JSON.parse(event.body);

        const params = {
            Destination: { ToAddresses: [RECEIVER] },
            Message: {
                Body: {
                    Text: {
                        Data:
                            "Full Name: " + body.name +
                            "\nEmail: " + body.email +
                            "\nMessage: " + body.message,
                        Charset: "UTF-8",
                    },
                },
                Subject: {
                    Data: "Website Query Form: " + body.name,
                    Charset: "UTF-8",
                },
            },
            Source: SENDER,
        };

 
        await ses.sendEmail(params).promise();

 
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",    
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify({ message: "Email sent successfully" }),
        };

    } catch (err) {
        console.error("Error sending email:", err);

        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify({ error: err.message }),
        };
    }
};
