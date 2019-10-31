'use strict';

let newLinePrinted = false;
let count = 0;
let pluginsCount = 0;

function printNewLine () {
  count++;
  if (count < pluginsCount) return;

  newLinePrinted = true;
  console.log();
}

class CoolPlugin {
  constructor (throwError) {
    this.pluginId = ++pluginsCount;
    this.throwError = throwError;
  }

  apply (compiler) {
    compiler.hooks.invalid.tap(`CoolPlugin${this.pluginId}`, this.handleIvalidated.bind(this));
    compiler.hooks.compile.tap(`CoolPlugin${this.pluginId}`, this.handleCompile.bind(this));
    compiler.hooks.done.tap(`CoolPlugin${this.pluginId}`, this.handleDone.bind(this));
  }

  handleIvalidated () {
    newLinePrinted = false;
    count = 0;
    console.log(`[${Date.now()}] CoolPlugin${this.pluginId}: Ivalidated`);
  }

  handleCompile () {
    console.log(`[${Date.now()}] CoolPlugin${this.pluginId}: Compiling`);
  }

  handleDone (stats) {
    const { errors, warnings } = stats.compilation;

    if (this.throwError && errors.length > 0) {
      throw new Error();
    }

    console.log(`[${Date.now()}] CoolPlugin${this.pluginId} Done`, 'errors', errors.length, 'warnings', warnings.length);
    printNewLine();
  }
}

exports = module.exports = CoolPlugin;
