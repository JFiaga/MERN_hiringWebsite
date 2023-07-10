export class BaseError extends Error {
  status: number;
  isOperational: boolean;

  constructor(message:string, status:number, isOperational:true){
    super(message)
    this.status = status
    this.isOperational= isOperational
    Object.setPrototypeOf(this, BaseError.prototype)
  }
}



//404 error

export class notFoundError extends BaseError{
  constructor(message:string){
    super(message, 404, true)
    Object.setPrototypeOf(this, notFoundError.prototype)
  }
};

//400 error
export class ValidationError extends BaseError {
  errorData : Record <string, string>[]
  constructor (data:Record <string, string>[]){
    super("Validation Error", 400, true)
    this.errorData = data
    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

