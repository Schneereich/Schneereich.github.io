/*
 Detects the browser language
 */
var userLang = navigator.language || navigator.userLanguage;

/*
 test if ou cookie is set
 */

console.log(userLang);

if(localStorage.getItem('lang')!=null){
    redirect(userLang);
    //   it is set, so no redirect
}
else{
  // The cookie is not set, so set it, and redirect
  langstring=userLang.split('-')[0];
  localStorage.setItem('lang',langstring);
  redirect(langstring);
}

/*
 redirects to the desired URLs
 Only the first two letters of the ISO country code are used
 */
function redirect(actuallang){
  var url ='/';
  switch(actuallang){
    case 'en':
      url ='./locales/en/index.html';
      break;
    case 'hu':
      url ='./locales/hu/index.html';
      break;
    case 'de':
      url ='./locales/de/index.html';
      break;
    default:
      url='./locales/de/index.html';
      break;
  }
  document.location.pathname(url);
}