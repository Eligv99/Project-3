
import mailer from '../client/src/utils/nodemailer'

export default nodemailer = () => {

  app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body
  
    mailer({ email, name, text: message }).then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.redirect('/#success');
    }).catch((error) => {
      console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
      res.redirect('/#error');
    })
  })
  
}
