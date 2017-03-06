<!--login_form.php-->
<!DOCTYPE html>
<html>
<head>
  <title>Form</title>
  <script>
  window.onload = function() {
    let form = document.getElementById('form')
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitData();
    });
  };

  function submitData() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let formData = new FormData();

    formData.append('username', user);
    formData.append('password', pass);

    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', (data) => {
      console.log(data.target.response);
      let loginStatus = document.getElementById('login_status');
      let tn = document.createTextNode(data.target.response.message);

      loginStatus.appendChild(tn);

    });


    xhr.open('POST', 'login_handler.php');

    xhr.send(formData);
  }
  </script>
</head>
<body>
  <form id="form">
    Username: <input id="username" type="text">
    Password: <input id="password" type="password">
    <button id="submit">Submit</button>
  </form>
  <p id="login_status"></p>
</body>
</html>
