<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <form>
    Title: <input name="title">
    Details: <input name="details">
    Time: <input name="timestamp">
    Cheese: <input name="cheese">
    <button type="button" onclick="sendData()">Submit</button>
  </form>
</body>
<script>
function sendData() {
  let title = document.querySelector("input[name='title']").value;
  let details = document.querySelector("input[name='details']").value;
  let timestamp = document.querySelector("input[name='timestamp']").value;
  let cheese = document.querySelector("input[name='cheese']").value;

  // let queryString = '?';
  // queryString = queryString + 'title=' + title + "&";
  // queryString = queryString + 'details=' + details + "&";
  // queryString = queryString + 'timestamp=' + timestamp + "&";
  // queryString = queryString + 'cheese=' + cheese;

  let formData = new FormData();

  formData.append("title", title);
  formData.append("details", details);
  formData.append("timestamp", timestamp);
  formData.append("cheese", cheese);

  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./index_insert.php");
  xhr.send(formData);
}
</script>
</html>
