fallback.load({
    "libs": {
        "jQuery": {
            "urls": [
                "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
                "jquery-2.1.4.min.js"
            ]
        },
        "css$bootstrap": {
            "exports": ".col-xs-12",
            "urls": [
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
                "bootstrap-3.3.5-dist/css/bootstrap.min.css"
            ]
        },
        "js$bootstrap": {
            "exports": "jQuery.fn.model",
            "urls": [
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js",
                "bootstrap-3.3.5-dist/js/bootstrap.min.js"
            ]
        },
        "angular": {
            "urls": [
                "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js",
                "angular-1.3.15.min.js",
            ]
        }
    }
});