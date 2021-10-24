# Github Repository Lookup

> Simple app to look up repositories using github search api

## Requirements

- [X] An input to type in the text to search github repositories.
- [X] Show the results of the search
- [X] Sort results by best match
- [X] Sort results by stars
- [X] Filter results by language
- [X] Page that shows detailed information on clicked repository
- [X] Responsive design


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

## Assumptions or Limitations

So one area of concern I ran into was with pagination. My concern was around the fact that if there were more than 100 results,
that they wouldn't be included in the data grid.<br>

In my mind for the MVP this is fine because the requirements state that the app is meant to be going off of the search api and it's results. I also see two solutions that can fix this if it is an issue:

### Load all data on on initial search

In this approach we would essentially do one request at the beginning to get the first page of data, and if there were more results (response send data "total items") then we would do batch requests for every page that we needed. This would allow us to aggregate all results.
<br>
Pros:<br>
No requests needed for page navigation

Cons:<br>
The first initial request would be long

### Load page data on next page

In this approach we used the total items property to calculate how many pages there would be, and everytime user navigates we send a new request to get the page that the user navigated to. We could also keep the repositories from past page, allowing back page to not send a request.
<br>
Pros:<br>
Smaller inital request<br>
<br>
Cons:<br>
Loading everytime user navigates page.

## Features that need to be added for UI/UX

1.) Error handle if request fails (add notifications)
