import React,{Component} from 'react';
import './Header.css';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const customStyles=
{
  content:{
      top:'50%',
      left:'50%',
      right:'auto',
      botttom:'auto',
      marginRight:'-50%',
      transform:'translate(-50%,-50%)',
      overflow:'auto'
  }
};

const TabContainer=function(props)
{
    return( <Typography component="div" style={{padding:0,textAlign:'center'}}>
             {props.children}
           </Typography>);
}

TabContainer.propTypes={
    children:PropTypes.node.isRequired
}

const styles = theme => ({
appHeader:{
backgroundColor:'darkslategray',
height:'100%',
maxWidth:'100%',
padding:theme.spacing.unit,
overflow:'hidden'
},
fastfood:{
    color:'white'
},
searchIcon:{
    color:'white',
    marginRight:'5px',

},
inputInput:{
    color:'white',
    width:'250px',

},
errorMsg:
{
    color:'red',
    marginBottom:'12px',
}
});

class Header extends Component {
    constructor()
    {
        super();
        this.state={
            modalIsOpen:false,
            value:0,
            contact:"",
            password:"",
            firstname:"",
            lastname:"",
            email:"",
            signupPassword:"",
            signupContact:"",
            contactRequired:"dispNone",
            passwordRequired:"dispNone",
            firstnameRequired:"dispNone",
            emailRequired:"dispNone",
            signupPasswordRequired:"dispNone",
            signupContactRequired:"dispNone",
            registrationSuccess: false,
            snackbarOpen:false,
            snackbarMsg:'',
            emailError:"",
            contactError:"",
            passwordError:"",
            signupPasswordError:"",
            signupContactError:""
        };
    }

    openModalHandler=()=>
    {
        this.setState({
            modalIsOpen:true,
            value: 0,
            contactRequired: "dispNone",
            contact: "",
            passwordRequired: "dispNone",
            password: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            signupPasswordRequired: "dispNone",
            signupPassword: "",
            signupContactRequired: "dispNone",
            signupContact: ""
    });
    }

    closeModalHandler=()=>
    {
        this.setState({modalIsOpen:false})
    }

    tabChangeHandler=(event,value)=>
    {
        this.setState({value})
    }

    loginClickHandler=(e)=>
    {
    this.state.contact==="" ? this.setState({contactRequired:"dispBlock"}) :this.setState({contactRequired:"dispNone"});
    this.state.password==="" ? this.setState({passwordRequired:"dispBlock"}) :this.setState({passwordRequired:"dispNone"});
    this.setState({snackbarOpen:true,snackbarMsg:'Logged in successfully!'});

      e.preventDefault();
       const isLoginValid=this.validateLoginForm();
       if(isLoginValid)
       {
         console.log(this.state);
         this.setState({password:"",
         contact:"",contactError:""}) 
       }
    
    }

    searchHandler=()=>
    {
       this.setState({borderBottom:"dispWhite"});
    }

    inputContactChangeHandler=(event)=>
    {
      this.setState({contact:event.target.value})
    }

    inputPasswordChangeHandler=(event)=>
    {
     this.setState({password:event.target.value})
    }

    inputFirstNameChangeHandler=(event)=>
    {
     this.setState({firstname:event.target.value})
    }

    inputLastNameChangeHandler=(event)=>
    {
     this.setState({lastname:event.target.value})
    }

    inputEmailChangeHandler=(event)=>
    {
     this.setState({email:event.target.value})
    }

    inputSignupContactChangeHandler=(event)=>
    {
     this.setState({signupContact:event.target.value})
    }

    inputSignupPasswordChangeHandler=(event)=>
    {
     this.setState({signupPassword:event.target.value})
    }

    signupClickHandler=(e)=>
    {
      this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
      this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
      this.state.signupPassword === "" ? this.setState({ signupPasswordRequired: "dispBlock" }) : this.setState({ signupPasswordRequired: "dispNone" });
      this.state.signupContact === "" ? this.setState({ signupContactRequired: "dispBlock" }) : this.setState({ signupContactRequired: "dispNone" });
      this.setState({snackbarOpen:true,snackbarMsg:'Registered successfully! Please login now!'});

    //   if (this.validateSignupForm()) {
    //     this.setState({firstname:"",
    //     lastname:"",email:"",signuppassword:"",signupcontact:""});
    //     alert("Form submitted");
    // }
       e.preventDefault();
       const isValid=this.validateSignupForm();
       if(isValid)
       {
         console.log(this.state);
         this.setState({firstname:"",lastname:"",email:"",signupPassword:"",
         signupContact:"",emailError:"",signupPasswordError:"",signupContactError:""
        }) 
       }
    }

    snackbarClose=(event)=>
    {
       this.setState({snackbarOpen:false,value:0})
    }
   
    validateSignupForm=()=>
    {
    //    let signupFormIsValid=true;
    //    let errorsEmail;
    //    let errorsContact;
    //    if (typeof this.state.email !== "undefined") {
    //     //regular expression for email validation
    //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //     if (!pattern.test(this.state.email)) {
    //       signupFormIsValid = false;
    //       errorsEmail = "Invalid Email";
    //     }
    //   }
    //   if (typeof this.state.signupcontact !== "undefined") {
    //     if (!this.state.signupcontact.match(/^[0-9]{10}$/)) {
    //       signupFormIsValid = false;
    //       errorsContact = "Please enter valid mobile no.";
    //     }
        let emailError="";
        let signupPasswordError="";
        let signupContactError="";

        if(!this.state.email.includes('@'))
        {
          emailError="Invalid Email";
        }
        if(!this.state.signupContact.match(/^[0-9]{10}$/))
        {
            signupContactError="Contact No. must contain only numbers and must be 10 digits long";
        }
        if(!this.state.signupPassword.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/))
        {
            signupPasswordError="Password must contain atleast one capital letter,one small letter,one number and one special character";
        }
        if(emailError||signupContactError||signupPasswordError)
        {
          this.setState({emailError,signupContactError,signupPasswordError});
          return false;
        }
        return true;
      };

    //   this.setState({
    //     errorsEmail:errorsEmail,
    //     errosContact:errorsContact
    //   });
    //   return signupFormIsValid;
    
    
    validateLoginForm=()=>
    {
        let contactError="";
        if(!this.state.contact.match(/^[0-9]{10}$/))
        {
            contactError="Invalid Contact";
        }
        if(contactError)
        {
          this.setState({contactError});
          return false;
        }
        return true;
      
    }
    render(){
        const{classes}=this.props;
        return (
            <div>
            <header className={classes.appHeader}>
            <div className="flex-items">
            <div className={classes.fastfood}>
            <FastfoodIcon/>
            </div>
            <div className="searchContainer" onClick={this.searchHandler}>
            <div className={classes.searchIcon}>
            <SearchIcon/>
            </div>
            <FormControl>
                <Input className={classes.inputInput} disableUnderline={true} type="text" placeholder="Search by Restaurant Name" name="search"/>
            </FormControl>
            </div>
            <div>
            <Button className="btn" variant="contained" color="default" onClick={this.openModalHandler}><AccountCircleIcon style={{marginRight:'5px'}}/>Login</Button>
           </div>
           </div>
          </header>
          <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}> 
           <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="LOGIN"/>
            <Tab label="SIGNUP"/>
           </Tabs>

            { this.state.value === 0 &&
            <TabContainer>
            <FormControl required>
            <InputLabel htmlFor="contact">Contact No.</InputLabel>
            <Input style={{width:'240px'}}type="text" id="contact" contact={this.state.contact} onChange={this.inputContactChangeHandler}/>
            <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
            <FormHelperText className={classes.errorMsg}>{this.state.contactError}
            </FormHelperText>   
            </FormControl>
            <br/><br/>
            <FormControl required> 
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input style={{width:'240px'}}type="password" password={this.state.password} id="password" onChange={this.inputPasswordChangeHandler}/>
            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
            <FormHelperText className={classes.errorMsg}>{this.state.passwordError}
            </FormHelperText>   
            </FormControl>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
            </TabContainer>}

            {this.state.value === 1 &&
            <TabContainer>
            <FormControl required>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler} />
            <FormHelperText className={this.state.firstnameRequired}>
            <span className="red">required</span>
            </FormHelperText>
            </FormControl>
            <br/><br/>
            <FormControl>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler} />
            </FormControl>
            <br/><br/>
            <FormControl required>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler} />
            <FormHelperText className={this.state.emailRequired}>
            <span className="red">required</span>
            </FormHelperText>
            <FormHelperText className={classes.errorMsg}>{this.state.emailError}
            </FormHelperText>       
            </FormControl>
            <br/><br/>
            <FormControl required>
            <InputLabel htmlFor="signupPassword">Password</InputLabel>
            <Input id="signupPassword" type="password" signuppassword={this.state.signupPassword} onChange={this.inputSignupPasswordChangeHandler} />
            <FormHelperText className={this.state.signupPasswordRequired}>
            <span className="red">required</span>
            </FormHelperText>
            <FormHelperText className={classes.errorMsg}>{this.state.signupPasswordError}
            </FormHelperText>         
            </FormControl>
            <br/><br/>
            <FormControl required>
            <InputLabel htmlFor="signupContact">Contact No.</InputLabel>
            <Input id="signupContact" type="text" signupcontact={this.state.signupContact} onChange={this.inputSignupContactChangeHandler} />
            <FormHelperText className={this.state.signupContactRequired}>
            <span className="red">required</span>
            </FormHelperText>
            <FormHelperText className={classes.errorMsg}>{this.state.signupContactError}
            </FormHelperText>          
            </FormControl>
            <br/><br/>
            <Button variant="contained" color="primary" onClick={this.signupClickHandler}>SIGNUP</Button>
            </TabContainer>
            }
        </Modal>

        <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'left'}}
        open={this.state.snackbarOpen}
        autoHideDuration={3000}
        onClose={this.snackbarClose}
        message={<span id="message">{this.state.snackbarMsg}</span>}/>
        </div>
    )
    }
}

export default withStyles(styles)(Header)
