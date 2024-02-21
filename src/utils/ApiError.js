class ApiError extends Error {
  constructor(
    statusCode,
    message = " Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message)
    this.statusCode = statusCode
    this.data=null
    this.message=message 
    // sucess code nahi  jayega kyuki api eror ko handle kar rhe hai api response ko nahi
    this.successs=false
    this.errors=errors

    if(stack){
        this.stack=stack
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}
