#Bamazon CLI Customer / Manager Application

##Instructions 

* Run this command line application by running either bamazonCustomer.js or bamazonManager.js
* Each file will present options of what the user can do using inquirer
* As a Customer, you can purchase products 
* As a manager, you can view all products, view low inventory, add inventory of a product, or add a new product 

##Project Design

* This project uses mysql to store and pull all data. Use the seed file to populate your local database 
* I used three different packages: inquirer, mysql, and colors (to give the command line some flavor)
* Each file has a series of functions that contain specific tasks 
* A switch statement was used for the manager portion to determine which function to use  
* View the gifs below to see different app behavior


##Customer User Flow

###Purchase Product 
![Purchase Product](https://media.giphy.com/media/1rKFYBqy78RLYjrD9Z/giphy.gif)

###Insufficient Quantity
![Insufficient Quant](https://media.giphy.com/media/2hgmDamQfWNdrHpgdD/giphy.gif)

###Product Not Found 
![Not Found](https://media.giphy.com/media/7NUFVUTf2Az1F12Vew/giphy.gif)



##Manager User Flow

###View Products
![View Products](https://media.giphy.com/media/1xnyp1fWnAR2TxMIH6/giphy.gif)

###View Low Inventory 
![Low Inventory](https://media.giphy.com/media/cdSmdtHTtCsxcLG6Tu/giphy.gif)

###Add Inventory 
![Add Inventory](https://media.giphy.com/media/woDjX8NpUzwygepZxM/giphy.gif)

###Add Product 
![Add Product](https://media.giphy.com/media/1XeGI2hQJUsZIowGBA/giphy.gif)