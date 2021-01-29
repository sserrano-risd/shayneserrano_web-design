$("document").ready(function() {

const mq = window.matchMedia('(max-width: 768px)');

if(mq.matches) {
    $("#brgr").click(function() {
        $(".menu").slideToggle(1000);
    });
}
});