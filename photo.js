"use strict";
   function previewFile(){


       var preview = document.querySelector('img'); //selects the query named img
       var fileSelector = document.querySelector('input[type=file]');
       if(fileSelector == null) {
           return;
       }
       var file = fileSelector.files[0];
       var reader  = new FileReader();
       reader.onloadend = function () {
           preview.src = reader.result;
       }
       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()
 