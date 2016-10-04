all: node_modules/.bin
	@echo "Now look at the Makefile in the src/ folder for the build targets"

node_modules/.bin:
	npm config set loglevel silent
	npm config set prefix $(shell pwd)
	npm install # --loglevel verbose
