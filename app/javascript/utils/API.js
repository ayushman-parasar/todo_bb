export const fetchApi = ({
  url,
  method,
  body,
  onError,
  errorCallback,
  onSuccess,
  successCallback
}) =>{
  method = method.toUpperCase()
  
  var options =  {
    method:method,
    headers: {
      Accept: "application/json",
      'Content-Type': "application/json",
      'X-CSRF-TOKEN': document.querySelector('[name= "csrf-token"]').content
    }
  }
  const methods = ["POST", "PUT", "PATCH"];
  if (methods.includes(method)){
    options['body']=JSON.stringify(body)
  }
  console.log({"url":url, "options":options})
  fetch(url, options)
    .then(response=> 
      response.json()
        .then(data=>{
          console.log("inside fetch api", response,"::::::",data)

        })
    )
}