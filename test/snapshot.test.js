import ButtonRow from "../src/components/ButtonRow.js";
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer();

describe('<ButtonRow/> rendering', () => {
    it('snapshot test buttonrow', () => {
    let buttonRow = renderer(<ButtonRow />);
    expect(buttonRow.toJson()).toMatchSnapshot();
    })
})