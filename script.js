const displayData=(data)=>{
    output.value+=data //sequential data
}
    
const removeAll=()=>{
    output.value=""
    // create an empty string
}

const delet=()=>{
    output.value=output.value.slice(0,-1)
    
    // output.value.pop()
 
}
const showResult=()=>{
    try{
        console.log("inside try block");
        
        output.value=eval(output.value)
    }
    catch(err){
        console.log("inside catch block");
        console.log(err)
        output.placeholder="Invalid"
        output.value=""
    }
    finally{
        console.log("inside finally block");

    }
}
// try catch------for solving/handling runtime error
// if more than ne expression has error, then use different try-catch 
// finally----will execute always(either have error or not)

