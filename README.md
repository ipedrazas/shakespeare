# shakespeare
Application demo

## Api 

The api branch contains the code for the website connecting to an API to retrieve the data. This example runs
two containers: one running the nginx with the html and javascript, and another running python serving the json.

The javascript uses an ajax call to fetch the data from the python api instead of loading it from a static file.

	docker run -it -p 5000:5000 ipedrazas/shakespeare:api
	docker run -it -p 8000:80 ipedrazas/shakespeare:api-hmtl


now, if you hit `localhost:8000` the web page will load, triggering the ajax call to `localhost:5000`, the second
container.

In this example we have gone from running our application in one container to run our app in two.