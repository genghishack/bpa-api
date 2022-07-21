import {LambdaRouter} from "../../lib/aws-lambda-lib";
import Handlers from './handlers';

export const main = LambdaRouter({
  handlers: Handlers,
  idType: 'uuid',
});
