let qrCode = document.querySelector("img");
let qrText = document.getElementById('input');
let download = document.getElementById('download');

function generateQR(){
     let data = qrText.value;
     if(data.length == 0){
          qrCode.src = "QR-Code Preview.svg";
     }else{
          let size = "1000x1000";
          let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

          let url = `${baseURL}?data=${data}&size=${size}`;

          qrCode.src = url;
     }
}

function qrDownload(){
     let imgPath = qrCode.getAttribute('src');
     
     saveAs(imgPath, "QR-Code");
}