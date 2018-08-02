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

          promptPurchase(results);
    })



  }

  function promptPurchase(productArray){

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

        //Make sure the product exists 
        let exists = false;
        let index = 0;
        for (let i = 0; i < productArray.length; i++){
            if (parseInt(answer.product) === productArray[i].item_id){
                exists = true;
                index = i;
            }
        }

        if (!exists) {
            console.log("Oops! Item does not exist");
            // displayProducts();
            return;
        }

        //If it does, then see if the quantity is available 
        if (productArray[index].stock_quantity < answer.quantity){
            console.log("Insufficient quantity!");
            return;
        }
        else{

            let newQuant = productArray[index].stock_quantity - answer.quantity;
            
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: newQuant
                  },
                  {
                    item_id: parseInt(answer.product)
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("Transaction Successful");
                  console.log("You were charged " + answer.quantity*productArray[index].price);
                  console.log("\n\n");
                }
              );
        }


      })
    })
    
  }

