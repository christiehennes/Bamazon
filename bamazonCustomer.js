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



    // connection.query("SELECT * FROM products", function(err, results) {
    //     if (err) throw err;

    //     inquirer
    //   .prompt([
    //     {
    //       name: "choice",
    //       type: "rawlist",
    //       choices: function() {
    //         var choiceArray = [];
    //         for (var i = 0; i < results.length; i++) {
    //           choiceArray.push(results[i].product_name);
    //         }
    //         return choiceArray;
    //       },
    //       message: "What auction would you like to place a bid in?"
    //     },
    //     {
    //       name: "bid",
    //       type: "input",
    //       message: "How much would you like to bid?"
    //     }
    //   ])
    //   .then(function(answer) { 
    //     console.log("Sounds good");
    //   })
    // })
  }