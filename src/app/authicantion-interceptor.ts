import { HttpInterceptorFn } from '@angular/common/http';

export const authicantionInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("calling an api.........",req.url)
  return next(req);
};
