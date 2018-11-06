import {shallow } from 'enzyme'
import Logo from './logo'

describe('Test the logo component in the header', () => {

	const LOGO = shallow(< Logo />)

	it('Should have 1 navlink', () => {
		expect(LOGO.find('withRouter(NavLink)').length).toBe(1)
	})

	it('Navlink should have a href', () => {
		expect(LOGO.find('withRouter(NavLink)').props().href).toBe('/')
	})

	it('Test if the image has an element', () => {
		expect(LOGO.find('.logo__image').length).toBe(1)
	})

	it('Check if the first element has the classname "logo"', () => {
		expect(LOGO.first().hasClass('logo')).toBe(true)
	})

	it('Check if there is a path in the src', () => {
		expect(LOGO.find('img').prop('src').length).toBeGreaterThan(0)
	})
});
