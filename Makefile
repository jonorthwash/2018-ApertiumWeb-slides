all: reveal.js roboto

reveal.js:
	wget https://github.com/hakimel/reveal.js/archive/3.6.0.tar.gz
	tar xzf 3.6.0.tar.gz
	ln -s reveal.js-3.6.0 $@
	rm 3.6.0.tar.gz

roboto:
	wget -O fonts.zip 'https://fonts.google.com/download?family=Roboto|Roboto%20Slab'
	unzip fonts.zip
	rm fonts.zip

clean:
	rm -rf reveal.js-3.6.0 3.6.0.tar.gz Roboto Roboto_Slab
