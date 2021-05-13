chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    $("head").prepend(
        `<style>
            * {
                transition-property: none !important;
                transform: none !important;
                animation: none !important;
            }
            img {
                background-attachment: scroll;
            }
            img[src*=".gif"] {
                opacity: 75%
            }
            img[alt*="GIF"] {
                opacity: 25%
            }
          .slide-image {
              height: auto;
              width: 20vw;
          }
        </style>`
    );
    $("body").prepend(
        `<img  src="${request.url}" id="${request.imageDivId}"
               class="slide-image" /> `
    );
    $(`#${request.imageDivId}`).click(function() {
        $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
    });
    sendResponse({ fromcontent: "This message is from content.js" });
});