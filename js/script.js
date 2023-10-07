
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let urlInput = document.getElementById("urlInput");
let dnldBtn= document.getElementById("dnldBtn");
function generateQr() {
    if(urlInput.value){
    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlInput.value;
        imgBox.classList.add("show-img");
        dnldBtn.classList.add("show-btn");
    }
    else{
        urlInput.classList.add("error");
        setTimeout(() => {
            urlInput.classList.remove("error");
        }, 1000);
    }
}
function downloadQr(){
        
        let imgSrc="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlInput.value;//qrimage.src
        let fileName="qrImage";

        saveAs(imgSrc,fileName);
}
//FileSaver.saveAs("https://httpbin.org/image", "image.jpg");