const vCardsJS = require('vcards-js');
exports.handler = async(context, event, callback) => {
  try {
    // const {firstName, middleName, lastName, organization, cellPhone} = event;
    const vCard = vCardsJS();
    vCard.firstName = "Talbots";
    vCard.lastName = "customer service";
    vCard.organization = "Talbots";
    vCard.cellPhone = event.store_number;
    
    console.log(vCard)
    
    const response = new Twilio.Response(); 
    response.appendHeader('Content-Disposition', 'inline; filename="enesser.vcf"');
    response.appendHeader('Content-Type', 'text/vcard; name="enesser.vcf"');
    response.setBody(vCard.getFormattedString());
    return callback(null, response);
  } catch(e) {
    return callback(e);
  }
}
