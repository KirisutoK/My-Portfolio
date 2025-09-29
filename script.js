function InfoBoxLeft() {
    const infoboxcontainer = document.getElementById("INFOBOXESCONTAINER");
    const infoboxleft = document.getElementById("INFOBOXLEFT");
    const infoboxcenter = document.getElementById("INFOBOXCENTER");
    const infoboxright = document.getElementById("INFOBOXRIGHT");

    infoboxcontainer.style.transform = "translateX(78.3vw)";

    infoboxleft.style.opacity = "1";
    infoboxleft.style.cursor = "default";
    infoboxleft.style.userSelect = "auto";
    infoboxleft.style.margin = "0px 0px";

    infoboxcenter.style.opacity = "0.5";
    infoboxcenter.style.cursor = "pointer";
    infoboxcenter.style.userSelect = "none";
    infoboxcenter.style.margin = "20px 40px";

    infoboxright.style.opacity = "0";
    infoboxright.style.cursor = "pointer";
    infoboxright.style.userSelect = "none";
    infoboxright.style.margin = "20px 40px";
}

function InfoBoxCenter() {
    const infoboxcontainer = document.getElementById("INFOBOXESCONTAINER");
    const infoboxleft = document.getElementById("INFOBOXLEFT");
    const infoboxcenter = document.getElementById("INFOBOXCENTER");
    const infoboxright = document.getElementById("INFOBOXRIGHT");

    infoboxcontainer.style.transform = "translateX(0vw)";

    infoboxleft.style.opacity = "0.5";
    infoboxleft.style.cursor = "pointer";
    infoboxleft.style.userSelect = "none";
    infoboxleft.style.margin = "20px 40px";

    infoboxcenter.style.opacity = "1";
    infoboxcenter.style.cursor = "default";
    infoboxcenter.style.userSelect = "auto";
    infoboxcenter.style.margin = "0px 0px";

    infoboxright.style.opacity = "0.5";
    infoboxright.style.cursor = "pointer";
    infoboxright.style.userSelect = "none";
    infoboxright.style.margin = "20px 40px";
}

function InfoBoxRight() {
    const infoboxcontainer = document.getElementById("INFOBOXESCONTAINER");
    const infoboxleft = document.getElementById("INFOBOXLEFT");
    const infoboxcenter = document.getElementById("INFOBOXCENTER");
    const infoboxright = document.getElementById("INFOBOXRIGHT");

    infoboxcontainer.style.transform = "TranslateX(-78.3vw)";;

    infoboxleft.style.opacity = "0";
    infoboxleft.style.cursor = "pointer";
    infoboxleft.style.userSelect = "none";
    infoboxleft.style.margin = "20px 40px";

    infoboxcenter.style.opacity = "0.5";
    infoboxcenter.style.cursor = "pointer";
    infoboxcenter.style.userSelect = "none";
    infoboxcenter.style.margin = "20px 40px";

    infoboxright.style.opacity = "1";
    infoboxright.style.cursor = "default";
    infoboxright.style.userSelect = "auto";
    infoboxright.style.margin = "0px 0px";
}