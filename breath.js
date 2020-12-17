class breath{

constructor(){
this.buttonn = createButton('Breathe test');
}

display(){
this.buttonn.position(500,300);
this.buttonn.mousePressed(()=>{
  this.buttonn.hide();
  this.butto= createButton('healthMeasures');
  this.butto.position(700,200);
  this.butto.mousePressed(()=>{
    this.butto.hide();
      
  this.greeting=createElement('h2')
      this.greeting.html("Hello These Steps are some effective steps against breathing prolems ")
      this.greeting.position(200,20);
      this.holdBreathe = createElement("h2");
      this.holdBreathe.html("To perform pursed-lip breathing:Relax your neck and shoulder muscles.Slowly breathe in through your nose for two counts, keeping your mouth closed. Purse your lips as if you’re about to whistle. Breathe out slowly and gently through your pursed lips to the count of four.")
      

      
     
     
      this.holdBreathe.position(60,500);
    
      })










this.greeting=createElement('h2')
    this.greeting.html("Hello ")
    this.greeting.position(200,20);
    this.holdBreathe = createElement("h2");
    this.holdBreathe.html("1-START THE STOPWATCH AND HOLD YOUR BREATHE AND HOLD YOUR BREATHE AS LONG YOU CAN THEN WHEN YOU ARE DONE STOP THE STOPWATCH IF YOU HOLD YOUR BREATHE FOR MORE THAN 30 SEC CLICK ON YES BUTTON AND IF NOT CLICK ON NO BUTTON ")
    this.holdBreathe.position(60,50);
    this.yes = createButton('YES');
    this.yes.position(400,200);
    
this.yes.mousePressed(()=>{
    //if(this.holdBreathe<30){
clear()
this.consult=createElement("h1")
this.consult.html(" you are fit keep doing exercise and take healthy meals" )
  //  }
  this.consult.position(100,200)

    })

    this.no = createButton('NO');
    this.no.position(100,200);
this.no.mousePressed(()=>{
    //if(this.holdBreathe<30){
clear()
this.consult=createElement("h1")
this.consult.html("consult a doctor and exercise and prefer to healthy meals " )
this.consult.position(600,300)
  //  }

    })




  });

}

}
