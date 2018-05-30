
//Q1
var kanye = "please Kanye, help me";


// Q2
const artist = "Kanye West";
var is = 'is';
var musicalGenius = 'a musical genius?";

var  genius = is+artist+musicalGenius

console.log ( genius);


//Q3
var family = new Object();
family.married = 2014;
family.presidentOfTheUnitedStates = false;
family.children = ['North', 'Saint', 'Chicago']


//Q4
const shoes = { 'name' = 'yeezy', 'brand' = 'nike'};
shoes.brand = 'adidas';

//Q5
const yeezy = { 'model' : '350'};
yeezy.["Super Moon Yellow"] = yeezy.model;
delete yeezy.model ;




//Q6

var discographie = {
						"the College Dropout" = 2004,
						"Late Registration" = 2005,
						"Graduation" : 2007, 
						"808s & Heartbreak" : 2008,
						"My beautiful Dark Twisted Fantasy" = 2010
					}

					

		
						
//Q7
const stronger = ['Work it', 'make it', 'do it', 'makes us', 'Harder', 'better', 'faster', 'stronger'];	


toUpper = function(x){ 
  return x.toUpperCase();
};
stronger.map(toUpper);

//Q8
const friends = ['jayz', 'rihanna', 'kidcudi'];
friends.push ( 'drake');
var firstFriend = friends.shift();
friends .unshift ( 'pusha-t');

var pos = friends.indexOf ('rihanna');

var secondFriend = friends.splice ( pos, 1);
var thirdFriend = friend.pop();


//Q9

duplicate = function(x){
	var c = 0
	for ( var i = 0; i<x.length;i++){
		x.push('x[i])
	}
	return x;
	
	
	
//Q10
const heartless = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'heartless');
  }
  return results;
};

const chorus = ['He lost his soul to a woman so ', 'How could you be so ', 'Oh, how could you be so'];

console.log(heartless(chorus));
 // ['He lost his soul to a woman so heartless', 'How could you be so heartless', 'Oh, how could you be so heartless'];

			
// ES6 style


const heartless2 = names =>{
	const results = [];
	for (let i = 0; i < names.length; i++) {
    results.push(names[i] $ {'heartless2'});
  }
  return results;
};

//Q11
var el = document.body.querySelectorAll('div ng-if="$ctrl.excerpt_with_markup" class="mini_card-lyric_excerpt" ng-bind-html="$ctrl.excerpt_with_markup"');

//Q12
var el2 = document.body.querySelectorAll('div.href');
//Q13


//Q14
<Twitter username='kanyewest'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

// Complete the following component definition of Twitter
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser take in a username returns a promise
// which will resolve with that username's data.

class Twitter extends Component {
  constructor ( username, badge)
  this.username = fetchUser(username );
  this.badge = badge ;
}


//Q15
fs.readFile(filePath, function(err, data){

            if (err) throw err; 
			console.log(data);}
		

fs.readFile(filePath)
.onSuccess(function(data){console.log(data)})
.onError(function(err){throw err})

//Q16
// At least 3 of this type Website are  : Airbnb, DropBox, Franck and Oak, Eskimo

           

//Q17
/* An ESILV project i'm proud of is certainly Mini-Apterros. 
The concept of this project is to create a mini electrical rocket ( Length  : 1m; Diameter : 160mm; type of propulsion similar to a real rocket)
which is able to take off and land vertically. This project is developed by the CNES to make an approach concerning 
the reusability of rocket launcher ( like the falcon 9 or the falcon heavy can do)


//Q18
I'm not so proud of projects i did this semester because i didn't take enought time to finish them, many  have issues and doesn't work properly 

//Q19

The developer tools gives you assistance for coding yet allow you to have some kind of liberty i what you want to do.

//Q20

Javascript exist since a while and can be found everywhere in the web area . 
Moreover javascript allow the website to become more dynamaic and interactive for the user which 
is presently essential to etablish a proper link between the customers and the site. Its for this reason
I believe you focused on this javascript ecosystem


