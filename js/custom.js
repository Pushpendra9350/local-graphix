function openNav() {
  if (document.getElementById("mySidepanel").style.width=='250px'){
    document.getElementById("mySidepanel").style.width = "0px";
    document.getElementById("nav-button").setAttribute("aria-expanded", 'false');
  }
  else{
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("nav-button").setAttribute("aria-expanded", 'true');
  }
  }
function closeSideNav() {
  if (window.screen.width<=992){
    document.getElementById("mySidepanel").style.width = "0";
    var x = document.getElementById("nav-button").getAttribute("aria-expanded"); 
    document.getElementById("nav-button").setAttribute("aria-expanded", 'false');
  }
}

function openMessagePanel() {
  document.getElementById("messageSidepanel").style.height = "360px";
  document.getElementById("message_button").style.display = "none";
}

function closeMessagePanel() {
  document.getElementById("messageSidepanel").style.height = "0px";
  document.getElementById("message_button").style.display = "block";
  document.getElementById("number_email_error").innerHTML = "";
  document.getElementById("message_input").style.height = '90px'
  document.getElementById("message_input").value = ''
  document.getElementById("number_email").value = ''
}

function closeSubsrcibeModel() {
  document.getElementById("messageUsModal").style.display = "none";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subscribe_email").value = ''
  $('#messageUsModal').modal('hide');
}

function openSocialPanel() {
  document.getElementById("mySocialpanel").style.width = "60px";
}

function closeSocialPanel() {
  document.getElementById("mySocialpanel").style.width = "0px";
}


var myBlurFunction = function(state) {
  /* state can be 1 or 0 */
  var containerElement = document.getElementById('main_container');
  var overlayEle = document.getElementById('overlay');

  if (state) {
      overlayEle.style.display = 'block';
      containerElement.setAttribute('class', 'blur');
  } else {
      overlayEle.style.display = 'none';
      containerElement.setAttribute('class', null);
  }
};

function validateEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

  var email = String(email).trim();
  return email.match(regex);
}

function validatePhone(phone) {
  var phone = String(phone).trim();
  return phone.match(
    /^\(?([6-9]{1})\)?[-. ]?([0-9]{9})$/
  );
}

function sendMessage(url, chatId, final_message){
  $.ajax({
    url:url,
    method:'POST',
    data:{chat_id:String(chatId),text:final_message},
    success:function(){
      closeMessagePanel()
      alert('your message has been sent Successfully!');
      
    },
    error:function(){
        closeMessagePanel()
        alert('Due to some internale issue,\nYour message has NOT been sent!');
    }
});
  return;
}

function sendsubscribeMessage(url, chatId, final_message){
  $.ajax({
    url:url,
    method:'POST',
    data:{chat_id:String(chatId),text:final_message},
    success:function(){
      closeSubsrcibeModel()
      alert('Thanks! Subscribed Successfully.');
      
    },
    error:function(){
      closeSubsrcibeModel()
        alert('Due to some internale issue,\nYour message has NOT been sent!');
    }
});
  return;
}


function validateAndSubscribe(){
  const token = process.env.TOKEN;
  const chatId = process.env.CHATID;
  
  var url = "https://api.telegram.org/bot"+String(token)+"/sendMessage";
  var email = document.getElementById("subscribe_email").value
  var final_message = "New Subscriber\n\nEmail\n"+String(email);
  var email = document.getElementById("subscribe_email").value
  if (validateEmail(email) == 'null' || validateEmail(email) == null || email== '') {
    document.getElementById("emailError").innerHTML = "Please enter a valid email address";
  }
  else{
    sendsubscribeMessage(url, chatId, final_message)
  }
}

function validateAndMessage(){
  const token = process.env.TOKEN;
  const chatId = process.env.CHATID;
  
  var url = "https://api.telegram.org/bot"+String(token)+"/sendMessage";
  var number_email = document.getElementById("number_email").value
  var message = document.getElementById("message_input").value
  var final_message = "New Message\n\nNumber or Email\n"+String(number_email)+"\n\nMessage\n"+String(message);
  
  if (validateEmail(number_email) == 'null' || validateEmail(number_email) == null || number_email== '') {
    
    if (validatePhone(number_email) == null || number_email== '')
    {
      document.getElementById("message_input").style.height = '66px'
      document.getElementById("number_email_error").innerHTML = "Enter a valid Email or Number without (0 or +91)";
    }
    else{
      sendMessage(url,chatId,final_message);
    }
  }
  else{
    sendMessage(url,chatId,final_message);
  }
}

function closeContact() {
  document.getElementById("email2_error").innerHTML = "";
  var name = document.getElementById("name").value = "";
  var email = document.getElementById("email").value = "";
  var message = document.getElementById("message").value = "";
}

function validateAndContact(){
  const token = process.env.TOKEN;
  const chatId = process.env.CHATID;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var contact_message = "Contact Message\n\nName: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message;
    
    var url = "https://api.telegram.org/bot"+String(token)+"/sendMessage";
    if (validateEmail(email) == 'null' || validateEmail(email) == null || email== '') {
      document.getElementById("email2_error").innerHTML = "Please enter a valid email address";
    }
    else{
      $.ajax({
        url:url,
        method:'POST',
        data:{chat_id:String(chatId),text:contact_message},
        success:function(){
          closeContact()
          alert('Thanks for contacting us!\nWe will get back to you soon.');
        },
        error:function(){
          closeContact()
          alert('Due to some internale issue,\nYour message has NOT been sent!');
        }
    });
    }
    
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});



