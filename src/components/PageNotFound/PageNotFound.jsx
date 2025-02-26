import React from "react";
import ravenLogo from "../../images/dark-evil-heraldic-raven-with-spread-wings.png";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <div className="pagenotfound__outer-container">
        <div className="pagenotfound__container">
          <img className="pagenotfound__logo" src={ravenLogo} alt="the raven" />
          <div className="pagenotfound__blurb">
            <p className="pagenotfound__blurb_text">
              Once upon a midnight dreary, while I websurfed, weak and weary,
            </p>
            <p className="pagenotfound__blurb_text">
              O'er many a strange and spurious site with 'hot chicks galore'.
            </p>
            <p className="pagenotfound__blurb_text pagenotfound__blurb_text-newline">
              While I clicked my fav'rite bookmark, suddenly there came a
              warning,
            </p>
            <p className="pagenotfound__blurb_text">
              And my heart was filled with mourning, mourning for my dear amour.
            </p>
            <p className="pagenotfound__blurb_text pagenotfound__blurb_text-newline">
              "'Tis not possible," I muttered, "give me back my cheap hardcore!"
            </p>
            <p className="pagenotfound__blurb_text pagenotfound__blurb_text-newline">
              Quoth the server, "404".
            </p>
          </div>
        </div>
        <iframe
          title="notfound"
          src="https://notfound-static.fwebservices.be/en/404?key=656e1cdd23cf6"
          width="100%"
          height="660"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
}

export default PageNotFound;
