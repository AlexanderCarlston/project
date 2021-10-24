# Github Repository Lookup

> Simple app to look up repositories using github search api

## Requirements

- [X] An input to type in the text to search github repositories.
- [X] Show the results of the search
- [X] Sort results by best match
- [] Sort results by stars
- [] Filter results by language
- [] Page that shows detailed information on clicked repository
- [] Responsive design


## Requirement Decisions and potential changes

### An input to type in the text to search github repositories.

This requirement is very straight forward, I would've asked for confirmation around some assumptions though:<br>

The text that is in the input is meant to map to the "q" of the github search

### Show the results of the search

This has potential to mean lots of things, in general I think it would be best to use a datagrid for this presentation

### Sort results by best match

My assumption around this is that this is the default return of the github api

### Filter results by language

My assumption is that this is programming language.

### Page that shows detailed information on clicked repository

Since this is open requirement I normally would work with design to design page, but since I'm using material UI I'll try to use
it's design concepts to implement a MVP for this.