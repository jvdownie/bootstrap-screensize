# bootstrap-screensize
Angular v1.x module for screen width/height and Bootstrap's breakpoints.
<br>
Updates the properties on screen resize.
<br>
Configure the debounce rate for performance requirements.
<h2>Usage</h2>
<p>Get bootstrap-screensize for your project:</p>
<pre>bower i bootstrap-screensize --save</pre>
<p>Add it to your HTML file:</p>
<pre>
&lt;script src="bower_components/angular-debounce/dist/angular-debounce.min.js"&gt;&lt;/script&gt;
&lt;script src="bower_components/bootstrap-screensize/dist/bootstrap-screensize.min.js"&gt;&lt;/script&gt;
</pre>
<p>Configuration (optional):</p>
<pre>
angular
  .module('app', ['bs.screenSize'])
  .controller('testCtrl', function(bsScreenSize){
    
    // default debounce rate
    bsScreenSize.config({debounce:100});
    
  });
</pre>
<p>Use it in modules:</p>
<pre>

angular
  .module('app', ['bs.screenSize'])
  .controller('testCtrl', function($rootScope, bsScreenSize){ // bsScreenSize is an optional dependency

    // responsive properties, updates on screen resize
    bsScreenSize.state; // 'xs','sm','md' or 'lg'
    bsScreenSize.width; // 1200
    bsScreenSize.height; // 800

    // static functions
    bsScreenSize.isScreenXs(); // bool
    bsScreenSize.isScreenSm(); // bool
    bsScreenSize.isScreenMd(); // bool
    bsScreenSize.isScreenLg(); // bool
    var state = bsScreenSize.currentState(); // 'xs','sm','md' or 'lg'
    var width = bsScreenSize.currentWidth(); // 1200
    var height = bsScreenSize.currentHeight(); // 800

    // also available in the $rootScope for convenience
    $rootScope.bsScreenSize.state; // 'xs','sm','md' or 'lg'
    $rootScope.bsScreenSize.width; // 1200
    $rootScope.bsScreenSize.height; // 800
    
  });
</pre>

<p>Use it in views:</p>
<pre>
    &lt;ANY ng-show="bsScreenSize.state == 'lg'"&gt;&lt;/ANY&gt;
    &lt;ANY ng-show="bsScreenSize.width >= 1200"&gt;&lt;/ANY&gt;
    &lt;ANY ng-class="{'some-class': bsScreenSize.state == 'lg'}"&gt;&lt;/ANY&gt;
    &lt;ANY ng-style="{'height': (bsScreenSize.height - 200) + 'px', 'margin-top': (bsScreenSize.state == 'xs')?'0':'10px' }"&gt;&lt;/ANY&gt;
</pre>
