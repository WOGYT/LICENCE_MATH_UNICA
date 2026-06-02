document.addEventListener("DOMContentLoaded", () => {
    const url = document.URL;
    var parsedURL = url.split("?pdf=");
    pdf_link = parsedURL[1];
    pdfContainer = document.getElementById("pdf-container");
    pdfContainer.innerHTML = `<embed src="..\\ressources\\${pdf_link}" height="100%" width="100%" type="application/pdf"/>
`;
});