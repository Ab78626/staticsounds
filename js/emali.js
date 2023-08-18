
function sendMail(e) {
   e.preventDefault();
   Email.send({
               Host : "smtp.elasticemail.com",
               Username : "staticsoundsja@gmail.com",
               Password : "FEE7B1DD1C52C70EB2D88220CF97249C06F0",
               To : 'staticsoundsja@gmail.com',
               From : 'staticsoundsja@gmail.com',
               Subject : document.getElementById('subject').value,
               Body : document.getElementById('message').value + " contact me at  : "+ document.getElementById('email').value +"  name "+document.getElementById('name').value
           }).then(
           message => alert(message)
           );
           clearbtn();
   return "message sent successfully"; 
               }
        function clearbtn()
         {
            document.getElementById('subject').value="";
            document.getElementById('message').value="";
            document.getElementById('name').value="";
            document.getElementById('email').value="";

        }
   