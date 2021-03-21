
(function () { if ( 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ) {
    document.documentElement.classList.add("mobile");
    document.querySelectorAll(".list_item_container").forEach(function (el) { el.classList.add("touch"); });
};})();