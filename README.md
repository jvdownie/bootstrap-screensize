# bootstrap-screensize
Angular v1.X module that keeps track of the current screen size and bootstrap's device size
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
<p>Use it:</p>
<pre>
angular
  .module('app', ['bs.screenSize'])
  .controller('testCtrl', function(bsScreenSize){
  
    bsScreenSize.state; // 'xs','sm','md' or 'lg'
    bsScreenSize.width; // current screen width. e.g. 1200
    bsScreenSize.height; // current screen height. e.g. 800
    
  });
</pre>
<pre>

  // use it in angular expressions
  {{ (bsScreenSize.state == 'lg' ) ? '<h1>Title</h1>' : '<h3>Title</h3>'  }}
  <ANY ng-show="bsScreenSize.state == 'lg'"></ANY>
  <ANY ng-show="bsScreenSize.width >= 1200"></ANY>
  
  // or styling elements
  <ANY ng-class="{'some-class': bsScreenSize.state == 'lg'}"></ANY>
  <ANY ng-style="{'height': (bsScreenSize.height - 30) + 'px',  'margin-top': (bsScreenSize.state == 'xs')?'0':'10px' }"></ANY>
</pre>
