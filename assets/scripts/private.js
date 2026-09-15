console.log('in secret js');

const signedIn = sessionStorage.getItem('signedIn');

if(signedIn==='true'){
    console.log('yes signed in');
}else{
    console.log('not signed in');
    window.location.href = 'signin.html'
}