run `npx webpack --config webpack.config.js`

Initial source file has errors and plugin made intentionally to throw Error.

To resume normal functioning remove `import` statements from `src/index.js`.

When one of the plugins throws Error in event handler the rest of the handlers
in other plugins will not be called and error in original handler is silenced
therefore, the developer can't understand why their great code working mysteriously
i.e. sometimes works, other times fails.


The issue is with tapable, because it creates string text functions on the fly
(loud thoughts: why the hell would you even do that for? :) )
That's your project, absolutely, and you decided how you code it, but it is so
unreadable. I was not able to visualize in my mind the bigger picture of logic of
your code, my intuition suggested that there is a problem with thrown errors as
everything just silently dies.
