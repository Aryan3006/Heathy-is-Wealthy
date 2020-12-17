class EyeTest{

    constructor(){
    this.button = createButton('Eye test');
//this.EeeT=loadImage("Eye Test.jpg")

    }
    
    display(){
    this.button.position(700,300);

    if(eye_btn)
    {
      image(EyeT,1000,300,400,300);
      image(owlImg,50,300,400,300)
    }
   
    this.button.mousePressed(()=>{
      eye_btn = true
      //image(EyeT,300,300,500,500);

      this.button.hide();
      this.butto= createButton('healthMeasures');
      this.butto.position(700,200);
      this.butto.mousePressed(()=>{
        this.butto.hide();
          
      this.greeting=createElement('h2')
          this.greeting.html("Hello These Steps are some effective steps against Eye Problems ")
          this.greeting.position(200,20);
          this.holdBreathe = createElement("h2");
          this.holdBreathe.html("Do not rub your eyes continously.Do not read in dim or very bright light.Everyday take sprinkles of water in your eyes.Visit an eye specialist at regular intervals of time.")
          
    
          
         
         
          this.holdBreathe.position(60,500);
        
          })
    
    
    
    
    
    
    
    
    
    
    this.greeting=createElement('h2')
        this.greeting.html("Hello ")
        this.greeting.position(200,20);
        this.holdBreathe = createElement("h2");
        this.holdBreathe.html("1-Watch These Images If you are able to see the desired thing press Yes If you are not able to see it press no and also check out health measures button")
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
    this.consult.html("consult a eye specialist and exercise and prefer to meals that has vitamin C " )
    this.consult.position(600,300)
      //  }
    
        })
    
    
    
    
      });
    
    }
    
    }
    