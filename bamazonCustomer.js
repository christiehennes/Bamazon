var mysql = require("mysql");
var inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    displayProducts();
  });



  function displayProducts(){
    console.log("Here are the products");

    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log('Item Number: ' + results[i].item_id);
            console.log('Product Name: ' + results[i].product_name);
            console.log('Price: $' + results[i].price)
            console.log('\n-----------\n');
          }
    })

    promptPurchase();

  }

  function promptPurchase(){

    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

        inquirer
      .prompt([
        {
          name: "product",
          type: "input",
          message: "Which item would you like to purchase? (enter item number)"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units would you like to buy?"
        }
      ])
      .then(function(answer) { 
        console.log("Sounds good");
        console.log(answer.product);
        console.log(answer.quantity);
      })
    })
    
  }