# AWS-serverless-contact-form-project
Serverless contact form using AWS Lambda, API Gateway, and SES for email delivery.

This project demonstrates how to build a serverless contact form using AWS Lambda, API Gateway, and SES (Simple Email Service). It allows users to submit a contact form that triggers an AWS Lambda function to send an email notification.

Features

-Frontend HTML + JavaScript form

-AWS Lambda backend function (lambda.js)

-Integration with API Gateway

-Email delivery using AWS SES

-100% serverless architecture (no servers to manage)

The structure and flow of the process of sending the mail are as described in the architecture.
<img width="955" height="289" alt="241678361532" src="https://github.com/user-attachments/assets/b42b5c9e-99a0-4352-9877-d7b5daddd9b5" />

How It Works

1. User fills out and submits the contact form.

2. The request is sent to API Gateway.

3. Lambda function (lambda.js) processes the request.

4. Lambda uses AWS SES to send an email notification.


