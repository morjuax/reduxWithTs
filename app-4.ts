import { Store, createStore } from 'redux'
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction, resetAction } from './contador/contador.action';

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log('Subs: ', store.getState())
})

store.dispatch( incrementadorAction );
store.dispatch( resetAction );
store.dispatch( resetAction );
store.dispatch( resetAction );
store.dispatch( resetAction );
store.dispatch( resetAction );


