const vCardsJS = require('vcards-js');
exports.handler = async(context, event, callback) => {
  try {
    const vCard = vCardsJS();
    vCard.firstName = "New York Flagship";
    vCard.lastName = "Store";
    vCard.organization = "Your Favorite Store";
    vCard.cellPhone = event.store_number;
    
    console.log(vCard)
    
    const response = new Twilio.Response(); 
    response.appendHeader('Content-Disposition', 'inline; filename="store.vcf"');
    response.appendHeader('Content-Type', 'text/vcard; name="store.vcf"');
    response.setBody(vCard.getFormattedString());
    return callback(null, response);
  } catch(e) {
    return callback(e);
  }
}
