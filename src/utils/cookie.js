
export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }


  export const getCookieData = () => {
    
    return {
      action: getCookie('action'),
      apikey:  getCookie('apikey'),
      checksum:  getCookie('checksum'),
      refresh_token: getCookie('refresh_token'),
      username: getCookie('username')
    }
}