all: reveal.js

reveal.js:
	wget https://github.com/hakimel/reveal.js/archive/3.6.0.tar.gz
	tar xzf 3.6.0.tar.gz
	ln -s reveal.js-3.6.0 $@
	rm 3.6.0.tar.gz

clean:
	rm -rf reveal.js-3.6.0 3.6.0.tar.gz
