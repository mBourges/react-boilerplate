import { getHooks } from './utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  const { injectReducer, injectSagas } = getHooks(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('./containers/home')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/todos',
      name: 'todos',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('./containers/todos'),
          System.import('./containers/todos/reducer'),
          System.import('./containers/todos/saga')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, reducer, saga]) => {
          injectReducer('todos', reducer.default);
          injectSagas(saga.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('./containers/notFound')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
