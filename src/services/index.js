import Saber from '@irim/saber';
import optionsFilling from './middlewares/option-filling';
import errorHandler from './middlewares/error-handler';

const saber = Saber.singleton();

saber.use(errorHandler);
saber.use(optionsFilling);

saber.request = saber.request.bind(saber);

export { saber };

export default saber;
