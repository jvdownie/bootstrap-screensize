/**
 * Created by Joe Downie on 4/20/2016.
 * https://github.com/jvdownie/bootstrap-screensize
 * The MIT License (MIT)
 */
(function(){
    'use strict';

    angular
        .module('bs.screenSize', ['rt.debounce'])
        .run(run);

    run.$inject = ['$rootScope', '$window', 'bsScreenSize', 'debounce'];
    function run($rootScope, $window, bsScreenSize, debounce){

        // expose the service to the $rootScope
        $rootScope.bsScreenSize = bsScreenSize;

        // initialize the current state/sizes
        $rootScope.$on('$viewContentLoaded', updateState());

        // update state/sizes on window resize
        angular.element($window).bind('resize', resize);

        // update the $rootScope/properties with the current state and sizes
        function updateState() {
            $rootScope.bsScreenSize.state = bsScreenSize.state = bsScreenSize.currentState();
            $rootScope.bsScreenSize.height = bsScreenSize.height = bsScreenSize.currentHeight();
            $rootScope.bsScreenSize.width = bsScreenSize.width = bsScreenSize.currentWidth();
        }

        // update state, debounce resize
        function resize() {
            debounce(
                bsScreenSize.config.debounce,
                $rootScope.$apply(function () {
                    updateState();
                })
            );
        }

    }

})();

(function(){
    'use strict';

    angular
        .module('bs.screenSize')
        .factory('bsScreenSize', bsScreenSize);

    var defaultConfig = {
        debounce: 100
    };

    var screenSizes = {'xs': 0, 'sm': 768, 'md': 992, 'lg': 1200};

    function getSize(Name) {

        var size;
        var name = Name.toLowerCase();
        var document = window.document;
        var documentElement = document.documentElement;

        if (window["inner" + Name] === undefined) {
            // IE6 & IE7 don't have window.innerWidth or innerHeight
            size = documentElement["client" + Name];
        }
        else if (window["inner" + Name] != documentElement["client" + Name]) {
            // WebKit doesn't include scrollbars while calculating viewport
            // Insert markup to test if a media query will match document.doumentElement["client" + Name]
            var bodyElement = document.createElement("body");
            bodyElement.id = "vpw-test-b";
            bodyElement.style.cssText = "overflow:scroll";
            var divElement = document.createElement("div");
            divElement.id = "vpw-test-d";
            divElement.style.cssText = "position:absolute;top:-1000px";
            // Getting specific on the CSS selector so it won't get overridden easily
            divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
            bodyElement.appendChild(divElement);
            documentElement.insertBefore(bodyElement, document.head);

            if (divElement["offset" + Name] == 7) {
                // Media query matches document.documentElement["client" + Name]
                size = documentElement["client" + Name];
            }
            else {
                // Media query didn't match, use window["inner" + Name]
                size = window["inner" + Name];
            }
            // Cleanup
            documentElement.removeChild(bodyElement);
        }
        else {
            // Default to use window["inner" + Name]
            size = window["inner" + Name];
        }
        return size;
    }

    function isScreenXs() {
        var width = getSize("Width");
        return width <= screenSizes.sm;
    }

    function isScreenSm() {
        var width = getSize("Width");
        return !!(width >= screenSizes.sm && width < screenSizes.md);
    }

    function isScreenMd() {
        var width = getSize("Width");
        return !!(width >= screenSizes.md && width < screenSizes.lg);
    }

    function isScreenLg() {
        var width = getSize("Width");
        return width >= screenSizes.lg;
    }

    function currentState() {
        if (isScreenXs())
            return 'xs';
        else if (isScreenSm())
            return 'sm';
        else if (isScreenMd())
            return 'md';
        else
            return 'lg';
    }

    function currentWidth() {
        return getSize("Width");
    }

    function currentHeight() {
        return getSize("Height");
    }

    function bsScreenSize(){
        return {
            config: defaultConfig,
            screenSizes: {'xs': 0, 'sm': 768, 'md': 992, 'lg': 1200},
            state: null,
            height: 0,
            width: 0,
            getSize: getSize,
            isScreenXs: isScreenXs,
            isScreenSm: isScreenSm,
            isScreenMd: isScreenMd,
            isScreenLg: isScreenLg,
            currentState: currentState,
            currentWidth: currentWidth,
            currentHeight: currentHeight
        };
    }

})();
