//handling promises is the key
const getPromise=() => {
     new Promise( (resolve,reject) => {
        console.log("this is a promise");

        resolve("this is a promise");
    }
)
}

let promise=getPromise();
promise.then( () => {
    console.log("hello world")} );

