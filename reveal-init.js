// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions. Can be
    // specified using percentage units.
    width: 1280, //960,
    //height: 720, //700,
    height: 1024,
    //width: 960,
    //height: 700,

    // Factor of the display size that should remain empty around the content
    margin: 0.1,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.0,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme

    transition: 'slide', // none/fade/slide/convex/concave/zoom
    // transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

    // Shows the slide number using default formatting
    //Reveal.configure({ slideNumber: true });
    //slideNumber: true,

    // Slide number formatting can be configured using these variables:
    //  "h.v":  horizontal . vertical slide number (default)
    //  "h/v":  horizontal / vertical slide number
    //    "c":  flattened slide number
    //  "c/t":  flattened slide number / total slides
    //Reveal.configure({ slideNumber: 'c' });
    slideNumber: 'c',

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional reveal.js plugins
    dependencies: [
        { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true },
        { src: 'reveal.js/plugin/notes/notes.js', async: true },
        // Title-Footer plugin
    // { src: 'reveal.js/plugin/title-footer/title-footer.js', async: true, callback: function() { title_footer.initialize(); } }

    ]
});


Reveal.addEventListener('smallimg', function() {
	document.getElementById('htmltools').classList.remove('full');
	document.getElementById('htmltools').classList.add('sidelined');
});
Reveal.addEventListener('largeimg', function() {
	document.getElementById('htmltools').classList.remove('sidelined');
	document.getElementById('htmltools').classList.add('full');
});
