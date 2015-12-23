//List of controllers
var joinusController = require('./controllers/joinusController');
var supportusController = require('./controllers/supportusController');

module.exports = function(app){
  app.post('/api/user', joinusController.createUserProfile);
  app.post('/api/supportus',supportusController.supportUS);
  app.post('/api/supportblood',supportusController.supportForBlood);
  app.post('/api/contactus', joinusController.contactUs);
  app.post('/api/memberlist', joinusController.memberList);
  app.post('/api/supportermemberlist',supportusController.supporterMemberList);
  app.get('/api/userimage/:id',joinusController.userImage);
  app.post('/api/membersearch',joinusController.memberSearch);
  app.post('/api/updateimages',joinusController.updateImages);
  app.post('/api/updateprofile',joinusController.updateProfile);

}
 
