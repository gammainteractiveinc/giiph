function sendEmail (){
    Email.send({
        SecureToken : "08a4f10b-910b-4feb-b04a-520e0bcdfa20",
        To : 'recruitment@giiph.com',
        From : document.getElementById("email").value,
        Subject : "New Inquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Contact No.: " + document.getElementById("contact").value
        + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message sent successfully!")
    );
}
