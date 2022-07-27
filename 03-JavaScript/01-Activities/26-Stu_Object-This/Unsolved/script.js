// TODO: What does 'this' refer to?
// global this
console.log(this);


// TODO: What does 'this' refer to?
// global object

function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// adding age plus 10
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
log initialInvestment Times 1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
