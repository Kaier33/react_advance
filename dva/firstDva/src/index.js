import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
    history: createHistory()
});

// 2. Plugins
// app.use({});
app.use(createLoading()) //不传参默认是loading.具体看dva-loading文档

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/counter').default);
require('./models').default.forEach(key => app.model(key.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
