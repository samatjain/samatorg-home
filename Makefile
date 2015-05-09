all:
	rm -rf output
	node_modules/.bin/broccoli build output

clean:
	rm -rf output tmp
