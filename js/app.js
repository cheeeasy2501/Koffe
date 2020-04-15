(function () {
    var app = new Vue({
        el: '#app',
        data: () => ({

            jpg: true,
            png: true,
            other: true,

        }),
        methods:
        {
            checkJpg() {
                this.jpg = !this.jpg;
            }
            ,
            checkPng() {
                this.png = !this.png
            },
            checkOther() {
                this.other = !this.other
            }
        }
    })
})();

