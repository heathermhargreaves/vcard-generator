# vcard-generator

This is a demonstration on how to generate a VCard with a dynamic store number. This is meant to be a boilerplate for getting started and meant to be customized for individual use cases.

## Requirements
- [A Twilio Number](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)
- Access to [Twilio Studio](https://support.twilio.com/hc/en-us/articles/115015961327-Getting-Started-with-Twilio-Studio)
- Access to [Twilio Functions](https://www.twilio.com/docs/runtime/functions)
- Optional: Knowledge of NodeJS and NPM

## Getting Started
1. Log in to your Twilio account and set up a new Studio Flow. You can give this any descriptive name you want such as `Store VCard Generator`. Click `create from JSON`, and then copy and paste the code from the ```twilio/studio-flow.json``` file into your Studio Flow JSON. Save and then publish your Studio Flow.
2. Navigate to the `Functions` tab in your Twilio console and create a new service. Give this a descriptive name such as `vcard-generator`.
3. Within your service click the "Add +" button and add a new Function. Again, give this a descriptive name such as `vcard`.
4. Copy and paste the javascript code from the `twilio/functions/vcard-generator.js` file and paste your code to replace the boilerplate code that was populated in your new Function.
5. Navigate to the `Numbers` tab. Purchase a new number with SMS capabilities if you don't have a number yet. Once you have your number, scroll down to `Incoming Message` and select `Studio Flow` and select the Studio Flow you just created--`Store VCard Generator`--and save your changes.

## Trying it out
Once you are set, send your number a text! You should get a text asking you if you'd like to confirm. If you send back `confirm` you will receive a text back with a promo code (oo la la) and a VCard with the number being the Twilio Number you used.
