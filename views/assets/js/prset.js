/* -----------------------------------------------
/* Authors: OlyB
/* GNU Affero General Public License v3.0: https://www.gnu.org/licenses/agpl-3.0.en.html
/* prSet script
/* ----------------------------------------------- */

function prSet(type) {
    var prUrl = document.getElementById("pr-url"),
        prGo1 = document.getElementById("pr-go1"),
        prGo2 = document.getElementById("pr-go2");

    prUrl.addEventListener("keydown", function(e) {
        if (e.code == "Enter" && prUrl.value) goProx[type](prUrl.value);
    }, false);

    prGo1.addEventListener("click", function() {
        if (prUrl.value) goProx[type](prUrl.value, "window");
    }, false);

    prGo2.addEventListener("click", function() {
        if (prUrl.value) goProx[type](prUrl.value, "stealth");
    }, false);
}
