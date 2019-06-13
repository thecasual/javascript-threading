# Brute forcing with javascript


These two files are a template for javascript threading. The first tile - index.html is the "mother" file while the file the actual worker will download and run with is "worker.js". Add your code to the worker.js file and send back messages to the "mother" javascript listener.

With this, the browser can run javascript request in tandem with each other. This makes it much easier to brute force since more request can be generated at the same time. I have noticied quite a bit of a slow down once many workers are added.
