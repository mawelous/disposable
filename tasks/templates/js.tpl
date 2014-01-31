(function () {

    var Disposable = {};

    // global on the server, window in the browser
    var root = this;

    var db = <%= db %>;

    Disposable.is = function ( mail ) {
        return db.indexOf( mail.split( '@' )[1] ) >= 0;
    }

    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return Disposable;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Disposable;
    }
    // included directly via <script> tag
    else {
        root.Disposable = Disposable;
    }

}());