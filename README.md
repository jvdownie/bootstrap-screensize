# bootstrap-screensize
Angular v1.X module for screen width/height and Bootstrap's breakpoints.
Updates the properties on screen resize.
Configure the debounce rate for performance requirements.
<h2>Usage</h2>
<p>Add bootstrap-screensize to your project:</p>
<pre>bower i bootstrap-screensize --save</pre>
<p>Add it to your HTML file:</p>
<div>
<pre>
&lt;script src="bower_components/angular-debounce/dist/angular-debounce.min.js"&gt;&lt;/script&gt;
&lt;script src="bower_components/bootstrap-screensize/dist/bootstrap-screensize.min.js"&gt;&lt;/script&gt;
</pre>
</div>
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
  .controller('testCtrl', function(bsScreenSize){
  
    bsScreenSize.state; // 'xs','sm','md' or 'lg'
    bsScreenSize.width; // current screen width. e.g. 1200
    bsScreenSize.height; // current screen height. e.g. 800
    
  });
</pre>

<p>Also available to views:</p>
<pre>
    &lt;ANY ng-show="bsScreenSize.state == 'lg'"&gt;&lt;/ANY&gt;
    &lt;ANY ng-show="bsScreenSize.width >= 1200"&gt;&lt;/ANY&gt;
    &lt;ANY ng-class="{'some-class': bsScreenSize.state == 'lg'}"&gt;&lt;/ANY&gt;
    &lt;ANY ng-style="{'height': (bsScreenSize.height - 200) + 'px',  'margin-top': (bsScreenSize.state == 'xs')?'0':'10px' }"&gt;&lt;/ANY&gt;
</pre>
