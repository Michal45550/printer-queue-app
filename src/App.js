import {Provider} from 'react-redux'
import store from './redux/store';
import PrinterQueue from "./components/printerQueue/PrinterQueue";

function App() {

    return (
        <Provider store={store}>
            <PrinterQueue/>
        </Provider>
    );
}

export default App;
