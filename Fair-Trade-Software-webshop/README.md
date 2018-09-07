# Fair-Trade-Software-webshop

### Homepage-API
I made sure the three most recent products are on the homepage. The HTML and CSS are built on top of the BEM naming convention to keep the structure in the code and easy to read. The product is clickable and goes to the Product detail page where you can choose a color and size. The API is made with Laravel. In the API i made sure there is a call to the database to get the all the products from the database and show them on the page.

### Order Validation
In the orderValidation.js is a javascript code to check if all the fields are good. If the field is filled with a correct value we set a class valid and if it is an incorrect value then the class false will be added to the input field

### ShoppingCart
In the shopping cart, you can see all the products that you added to the cart. This is because they are stored in the localstorage of the browser. The shopping cart is made for desktop and for your mobile phone so there are 2 PHP files and 2 SCSS files. In the order-confimation.php it shows the products after confirming they are ordered. When the user is refreshing or goes to another page than the localStorage is cleared.
