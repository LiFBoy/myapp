import attendance from './attendance';

export default {
  '/safety-campus': {
    name: '平安校园',
    children: {
      ...attendance,
    },
  },
};
