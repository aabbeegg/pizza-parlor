function pizza(size, topping, crust) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.number = number;
}

pizza.prototype.calculatePrice =
function() {
    let sizePrice = 250;  
// price of a small pizza //
    let toppingPrice = 200;
    const crustPrice = 300;
    if(this.size === "medium"){
        sizePrice = 1.5 * sizePrice;
    }
    else if (this.size === "large"){
        sizePrice = 2.5 * sizePrice;
    }
     
    //*calculation of toppings*//
    if (this.topping.type == cheese-topping) {
        toppingPrice = 300;}
        else if(this.topping.type == broccoli-topping)  {
            toppingPrice = 250;}
        else if(this.topping.type == meat-topping) {
            toppingPrice = 350;}
        }  

    //*limits the number of pizzas one can order*//    
    if (this.numberofpizzas == 1,2,3) {
        else if(this.numberofpizzas == <1) {
            alert(
                "please put in a valid number")
        else if(this.numberofpizzas == 3>) {
            alert(
                "please put in a maximum of 3 orders");
        }        
    
        let submit = new pizza(size+crustPrice+topping);

        output();

        function output() {
            let thankingText = ('<h5></h5>').text('Thank you,for choosing pizza parlor the best option in town')
        }
    }
    }
} 