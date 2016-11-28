# The Shakespeare

This application is a very simple web application that uses ajax to load from data. In the different branches
we will find different ways to build and run this application.

## Branches

* Static: Everything runs in one container running nginx. The data is loaded from a local json file.
* Api: There's a python API that serves the json data stored in a local file.  There's an ajax request 
from the web application. This example uses two containers (one for nginx, and another one for the pytho api).
* DB: The data is stored in a database.