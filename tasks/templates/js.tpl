var Disposable = (function() {
    var db = <%= db %>;

    return {
        is: function ( mail ) {
            return db.indexOf( mail.split( '@' )[1] ) >= 0;
        }
    }
})();