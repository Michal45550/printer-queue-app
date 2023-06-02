import {createStore} from "redux";
import reducers from "../../../../../store/reducers";
import {mount} from "enzyme";
import {Provider} from "react-redux";

import NewJobModal from "../NewJobModal";

describe('<NewJobModal />', () => {
    it('renders new job modal', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <NewJobModal/>
            </Provider>,
        );

        expect(wrapper.find(NewJobModal).exists()).toBe(true);

        wrapper.unmount();
    });
});
