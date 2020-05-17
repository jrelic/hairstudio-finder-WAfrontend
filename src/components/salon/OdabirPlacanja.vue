<template>
    
<div class="row">
  <div class="col-75">
    <div class="container">
      <form action="">
      
        <div class="row">
          <div class="col-50">
            <h3>Naplatna adresa</h3>
            <label for="fname"><i class="fa fa-user"></i> Ime i Prezime</label>
            <input type="text" id="fname" name="firstname" placeholder="Dino Gazić">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="dgazic@example.com">
            <label for="adr"><i class="fa fa-address-card-o"></i> Adresa</label>
            <input type="text" id="adr" name="address" placeholder="Preradovićeva 28a">
            <label for="city"><i class="fa fa-institution"></i> Grad</label>
            <input type="text" id="city" name="city" placeholder="Pula">

            <div class="row">
              <div class="col-50">
                <label for="state">Regija</label>
                <input type="text" id="state" name="state" placeholder="Istra">
              </div>
              <div class="col-50">
                <label for="zip">Poštanski broj</label>
                <input type="text" id="zip" name="zip" placeholder="52100">
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Naplata</h3>
            <label for="fname">Mogućnost naplate</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Ime na kartici</label>
            <input type="text" id="cname" name="cardname" placeholder="Dino Gazić">
            <label for="ccnum">Broj kartice</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Mjesec isteka</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="Rujan">
            <div class="row">
              <div class="col-50">
                <label for="expyear">Godina isteka</label>
                <input type="text" id="expyear" name="expyear" placeholder="2022">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352">
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Continue to checkout" class="btn">
      </form>
    </div>
  </div>
  <div class="col-25">
    <div class="container">
      <h4>Usluge<span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>2</b></span></h4>
      <br/>
      <p><a href="#">Feniranje ženske kose</a> <span class="price">150 HRK</span></p>
      <p><a href="#">Bojanje ženske kose</a> <span class="price">220 HRK</span></p>
      <hr>
      <p>Ukupno <span class="price" style="color:black"><b>370 HRK</b></span></p>
    </div>
  </div>
</div>
</template>




<script>
export default {
    
}
</script>



<style scoped>


body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}
h2{
text-align:left;
}

* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #cfcccc85;
  padding: 3px 18px 13px 18px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}

</style>