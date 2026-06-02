document.addEventListener("DOMContentLoaded", () => {
    const url = document.URL;
    var parsedURL = url.split("?pdf=");
    pdf_link = parsedURL[1];
    pdf_link = pdf_link.split('&')[0];
    pdf_link = decodeURIComponent(pdf_link);
    pdfContainer = document.getElementById("pdf-container");
    pdfContainer.innerHTML = `<embed src="..\\ressources\\${pdf_link}" height="100%" width="100%" type="application/pdf"/>
`;
});