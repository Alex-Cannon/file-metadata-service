// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

/*$(function() {

  $('#file-form').submit(function(event) {
    event.preventDefault();
    
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      alert('The File APIs are not fully supported in this browser.');
      return;
    }   

    var file_input = document.getElementById('file-input');
    if (!file_input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!file_input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!file_input.files[0]) {
      alert("Please select a file before clicking 'Load'");               
    }
    else {
      var file = file_input.files[0];
      var fr = new FileReader();
      console.log(file_input.files[0].size);
      fr.onload = () => {
        var regex = /data:.*;base64,/;
        var result = fr.result.replace(regex, "");
        console.log(result);
        console.log(result.length);
        $.get('/get-file-size', function(data) {

          console.log('data' + JSON.stringify(data));
        });
      };
      //fr.readAsText(file);
      fr.readAsDataURL(file);
    }

  });

});
*/