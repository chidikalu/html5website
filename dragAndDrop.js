function addDnDHandlers () {
    var coffeeimages = document.getElementsByClassName('productarticlewide');

    var shoppingCartDropzone = document.getElementById('shoppingcart');
    var shoppingcart = document.querySelectorAll('#shoppingcart ul')[0];
 
    //constructor for the cart items storage
    var cart = (function() {
        this.coffees = new Array();
    });

    var coffee = (function(id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    var currentCart = null;
    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    updateShoppingCartUI();
    currentCart.addCoffee = function (coffee) {
        currentCart.coffees.push(coffee);

        localStorage.setItem('cart', JSON.stringify(currentCart));
    }


    for (var i=0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("text", this.getAttribute('id'));
        }, false); 
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault);
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false
    }, false);

    shoppingCartDropzone.addEventListener("drop", function(ev) {
        if (ev.stopPropagation)
        ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("text");
        var element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
            var price = getAttribute('data-price');

            var coffee = new coffee(id, price);
            currentCart.addCoffee(coffee);
            UpdateShoppingCartUI()
        }
    //create a function for the currentCart
    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function updateShoppingCartUI() {

        shoppingcart.innerHTML = "";
        for (var i=0; i < currentCart.coffees.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentCart.coffees[i].coffeeId + "" +currentCart.coffees[i]
            shoppingcart.appendChild(liElement);
        }
    }

}