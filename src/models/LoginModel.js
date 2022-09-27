const mongoose = require('mongoose');
const { register } = require('../controllers/loginController');
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', HomeSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valida();
    if(this.errors.length > 0 ) return;
    this.use = await LoginModel.create(this.body);
  }   
  
  valida() {
    this.cleanUp();
    // o e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    // A senha precisa ter entre 6 e 20
    if(this.body.password.length < 6 || this.body.password.length > 20 ){
      this.errors.push('A senha precisa ter entre 3 e 20 caracteres.');
    }
  }


  cleanUp() {
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }  
    }
  } 
}     
module.exports = Login;

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  


  




