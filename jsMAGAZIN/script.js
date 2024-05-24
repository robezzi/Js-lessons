
function addCookie(id){
   let count=getCookieByName("product"+id)
      if(count===undefined){
          count=1
      }else{
          count++
      }
     document.cookie="tovar="+id.toString()+"="+count.toString()+";max-age=3600"

     console.log(document.cookie)  
    }
  function getCookieByName(name){
      let regex=new RegExp(`(^|)${name}=([^;]+)`)
      let match=document.cookie.match(regex)
      if(match)
     return match[2]
  }


