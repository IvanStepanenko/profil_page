window.onload = function () {
     document.getElementById("menuBtn").addEventListener('click',useMenu,false);

    //getting all anchor elements
    var links = document.links;
    //getting html
    html = document.documentElement;
    //getting body
    body = document.body;
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            //getting current scroll position
            var scrollTop = Math.round(body.scrollTop || html.scrollTop);
            if (this.hash !== "") {
                //preventing default anchor click behavior
                event.preventDefault();
                //getting element with id found in hash
                var hashElement = document.getElementById(this.hash.substring(1));

                var hashElementTop = 0;
                var obj = hashElement;
                while (obj.offsetParent) {
                    hashElementTop += obj.offsetTop;
                    obj = obj.offsetParent;
                }
                //getting element's position
                hashElementTop = Math.round(hashElementTop);

                scroll(scrollTop, hashElementTop, this.hash);
            }
        };
    }

}
var html, body;
var i =0;
var deg=0;


    function openMenu () {
            var menu = document.getElementById("menu").firstChild.childNodes;
            var hr = document.getElementById("menuBtn").childNodes;
            var interval = setInterval(function () {

                    if (menu[i].nodeType==1){
                        menu[i].style.visibility="visible";
                    }
                    i++;
                    if (i>=menu.length){
                    clearInterval(interval);
                }
            },20);

            hr[1].style.margin= "-1px";
            hr[2].style.margin= "-1px"
            var interval2 = setInterval(function () {
                    hr[3].style.display = "none";
                    hr[1].style.transform= "rotate("+deg+"deg)";
                    hr[2].style.transform= "rotate("+(-deg)+"deg)";
                deg++;
                    if (deg>45){
                        clearInterval(interval2);
                    }
            },2)
        }
        function closeMenu() {
            var menu = document.getElementById("menu").firstChild.childNodes;
            var hr = document.getElementById("menuBtn").childNodes;

            var interval2 = setInterval(function () {
                hr[1].style.transform= "rotate("+deg+"deg)";
                hr[2].style.transform= "rotate("+(-deg)+"deg)";
            deg--;
            if (deg<0){
                hr[1].style.margin="3px";
                hr[2].style.margin="3px";
                hr[3].style.display = "block";
                clearInterval(interval2);

            }
            },2);
            var interval = setInterval(function () {
                i--;
                if (menu[i].nodeType==1){
                    menu[i].style.visibility="hidden";
                }

                if (i==0){
                    clearInterval(interval);
                }
            },20);
        }
    function useMenu() {
            if (i>0){
                closeMenu()
            }
            openMenu()
        }

    function scroll(from, to, hash) {
    var timeInterval = 1; //in ms
    var prevScrollTop;
    var increment = to > from ? 10 : -10;

    var scrollByPixel = setInterval(function() {
        //getting current scroll position
        var scrollTop = Math.round(body.scrollTop || html.scrollTop);

        if (
            prevScrollTop == scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)
        ) {
            clearInterval(scrollByPixel);
            //Add hash to the url after scrolling
            window.location.hash = hash;
        } else {
            body.scrollTop += increment;
            html.scrollTop += increment;

            prevScrollTop = scrollTop;
        }
      }, timeInterval);
    }


function openBlock(el) {
    var kids = el.parentNode.childNodes;
    for (var k = 0; k < kids.length; k++) {
        var child = kids[k];
        if (child && child.className == "product_design") {
            if (child.style.visibility!= "visible") {
                child.style.visibility="visible";
            }

        }
    }
}
function closeBlock(el) {
    var kids = el.childNodes;
    for (var k = 0; k < kids.length; k++) {
        var child = kids[k];
        if (child && child.className == "product_design") {
            if (child.style.visibility!= "hidden") {
                child.style.visibility="hidden";
            }

        }
    }
}












