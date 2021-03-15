window.name = "Arrow Function";
let data = {
    name: "Regular Function",
    thisArrow:()=>{
        console.log(this.name);
        //Arrow Function refers to global variables
    },
    thisNormal(){
        console.log(this.name);
    }
};

data.thisArrow();
data.thisNormal();
