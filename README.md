# statistic.js
a reduce function that calculates mean for standard deviation and other needed

First, install the `statistic.js` module, using `npm install statistic`, then include the code with require or import:

  * **When you use `require`**, you have the freedom to assign    the module to any variable name you want, but you need to specify the module's name exactly:
      in this case, 'statistic'. The `require` method returns an object
      with all of the module's methods attached to it.<br /> <pre>var { Statistic } = require('statistic')</pre>
  * **When you use `import`** to use modules in my project. I'm probably using Babel, `@std/esm`, Webpack, or Rollup.
      Include a specific named export: <pre>import { Statistic } from 'statistic'</pre>
      Simple statistics has _only_ named exports for ES6.
