import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

export function display(component) {
  return mount(component)
}

export function assert_select(component, selector, expectation) {
  const selected = component.find(selector)
  switch (typeof (expectation)) {
    case 'string':
      expect(selected.text()).toEqual(expectation)
      break
    case 'number':
      expect(selected.length).toEqual(expectation)
      break
    default:
      expect(expectation).toEqual('string or number')
      break
  }
}

