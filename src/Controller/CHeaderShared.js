class CHeaderShared{


   static generateURL(data){
      return  fetch("http://urlshort/api/generate",{
            method: "post", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({url:data})

        }).then(response =>response.json());
 

    }

    
   static mostVisited(data){

      return  fetch("http://urlshort/api/topMostVisited",{
          method: "post", // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json'
          },
      }).then(response =>response.json());


  }



}
 export default CHeaderShared;