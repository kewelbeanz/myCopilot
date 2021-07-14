/* Use async and await to wait for page to load */
async function myFunction(){
    let myPromise=new Promise(function(myResolve,myReject){
        myResolve(location.href,"https://logicole.health.mil");
    });
    document.getElementById("okButton").click();
    document.getElementById("loginButton").click();
}