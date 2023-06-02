import {Provider} from 'react-redux'
import index from './store';
import PrinterQueue from "./features/printerQueue";

const App = () => {

    return (
        <Provider store={index}>
            <PrinterQueue/>
        </Provider>
    );
}

export default App;
