

// type of export - named export, default export

const name="john";
const age=30;

// export {name,age};

// default export

const data=()=>{
    let firstName="shanideval";
    let lastName="shanideval";
    return firstName+" "+lastName;

};
const message=()=>{
    console.log("hello");
};
export {name,age,message};
export default data;