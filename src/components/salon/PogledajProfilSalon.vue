<template>
   <b-container>
       <div>
        <div class="card mb-3">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
       
            <div>
            <label>Ime frizera: <div class="d-inline font-weight-bold">Ivan</div></label>
          </div>
          <div>
            <label>Prezime frizera: <div class="d-inline font-weight-bold">Ivic</div></label>
          </div>
          <div>
            <label>Telefon: <div class="d-inline font-weight-bold">0952934802</div></label>
          </div>
         <div>
            <label>Email: <div class="d-inline font-weight-bold">iivic@gmail.com</div></label>
         </div>

        </div>
        </div>
    
    <div class="rat">

    <div class="container">
    	
    
    <span class="heading-rating">Ocjene korisnika</span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<p class="font-weight-bold">Prosjek 4.1 na 254 recenzije.</p>
<hr style="border:1px solid black">

<div class="row">
  <div class="side">
    <div>5 zvjezdica</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-5"></div>
    </div>
  </div>
  <div class="side right">
    <div>150</div>
  </div>
  <div class="side">
    <div>4 zvjezdice</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-4"></div>
    </div>
  </div>
  <div class="side right">
    <div>63</div>
  </div>
  <div class="side">
    <div>3 zvjezdice</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-3"></div>
    </div>
  </div>
  <div class="side right">
    <div>15</div>
  </div>
  <div class="side">
    <div>2 zvjezdice</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-2"></div>
    </div>
  </div>
  <div class="side right">
    <div>6</div>
  </div>
  <div class="side">
    <div>1 zvjezdica</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-1"></div>
    </div>
  </div>
  <div class="side right">
    <div>20</div>
  </div>
</div>		
				
		
		<div class="row">
			<div class="col-sm-7">
				<hr/>
                <p class="naslov">Top 3 klijenta</p>
                <hr/>
				<div class="heading-rating">
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Josip Relić</a></div>
							<div class="review-block-date">Svibanj 15, 2020<br/>Prije 2 dana<br/><span class="font-weight-bold">Broj šišanja: 73</span></div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
							</div>
                            
							<div class="naslov">Zadovoljan!</div>
                            <hr style="border:1px solid black">
							<div class="review-block-description">Odlična usluga</div>
						</div>
                        <div class="vaucer">
                        <button  @click="obavijest()" class="btn btn-primary">Pošalji vaučer</button>
                        </div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Marijan Brčina</a></div>
							<div class="review-block-date">Travanj 14, 2020<br/>prije 30 dana<br/><span class="font-weight-bold">Broj šišanja: 68</span></div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
							</div>
							<div class="naslov">Vrhunska usluga!</div>
                            <hr style="border:1px solid black">
							<div class="review-block-description">Najbolji frizer</div>
                        
						</div>
                        <div class="vaucer">
                         <button  @click="obavijest()" class="btn btn-primary">Pošalji vaučer</button>
                         </div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Dino Gazić</a></div>
							<div class="review-block-date">Ožujak 14, 2020<br/>prije 60 dana <br/><span class="font-weight-bold">Broj šišanja: 61</span></div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn fa-star btn-grey btn-xs" aria-label="Left Align">
								  <span class="fa fa-star checked" aria-hidden="true"></span>
								</button>
							</div>
							<div class="naslov">Najbolji frizer</div>
                            <hr style="border:1px solid black">
							<div class="review-block-description">Najbolje šišanje u gradu</div>
						</div>
                        <div class="vaucer">
                         <button @click="obavijest()" class="btn btn-primary">Pošalji vaučer</button>
                         </div>
					</div>
				</div>
			</div>
		</div>
		
    </div>


</div>
 
 

       </div>
 
   </b-container>
</template>
<script>
import slugify from 'slugify'
import db from '@/firebase/init'

export default {
    data(){
        return{
         
        }
    },
    methods: {
        obavijest(){
            alert("Vaučer poslan na mail klijenta!")
        }
    }
  
   
}

</script>

<style>
.vaucer{
    margin-top:10px;
}
.rating fieldset, label { margin: 0; padding: 0; }
.rating body{ margin: 20px; }
.rating h1 { font-size: 1.5em; margin: 10px; }

/****** Style Star Rating Widget *****/

.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 


.dodajKomentar{
    margin-top:20px;
    font-size: 20px;
    max-width: 500px;
}
#comment{
    background: lightgray;
}
.naslov{
    font-size: 30px;
}

* {
  box-sizing: border-box;
}

.rat body {
  font-family: Arial;
  margin: 0 auto; /* Center website */
  max-width: 800px; /* Max width */
  padding: 20px;
}

.rat heading {
  font-size: 25px;
  margin-right: 25px;
}

.fa {
  font-size: 25px;
}

.checked {
  color: orange;
}

/* Three column layout */
.side {
  float: left;
  width: 15%;
  margin-top: 10px;
}

.middle {
  float: left;
  width: 70%;
  margin-top: 10px;
}

/* Place text to the right */
.right {
  text-align: right;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}

/* Individual bars */
.bar-5 {width: 60%; height: 18px; background-color: #4CAF50;}
.bar-4 {width: 30%; height: 18px; background-color: #2196F3;}
.bar-3 {width: 10%; height: 18px; background-color: #00bcd4;}
.bar-2 {width: 4%; height: 18px; background-color: #ff9800;}
.bar-1 {width: 15%; height: 18px; background-color: #f44336;}

/* Responsive layout - make the columns stack on top of each other instead of next to each other */
@media (max-width: 400px) {
  .side, .middle {
    width: 100%;
  }
  /* Hide the right column on small screens */
  .right {
    display: none;
  }
}
</style>