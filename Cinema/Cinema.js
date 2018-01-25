var Cinema = /** @class */ (function () {
    function Cinema(cinemaname, movieprice) {
        this.cinemaName = cinemaname;
        this.moviePrice = movieprice;
        this.studentDiscount = Math.round(Math.random() * (20 - 10)) + 10;
        this.teacherDiscount = Math.round(Math.random() * (10 - 5)) + 5;
    }
    Object.defineProperty(Cinema.prototype, "moviePrice", {
        get: function () {
            return this._moviePrice;
        },
        set: function (movieprice) {
            this._moviePrice = movieprice >= 30 && movieprice <= 200 ? movieprice : 40;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=Cinema.js.map