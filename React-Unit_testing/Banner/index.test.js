/* eslint-env jest */

import { shallow } from 'enzyme'
import Banner from './banner.js'

/*
* Start tests...
*/
describe('Banner', () => {
  let banner = shallow(<Banner />)

  it('should contain 2 <span> tags', () => {
    expect(banner.find('span').length).toBe(2)
  })

  it('should contain 2 <NavLinks> tags', () => {
    expect(banner.find('withRouter(NavLink)').length).toBe(2)
  })

  it('should have the class "banner"', () => {
    expect(banner.hasClass('banner')).toBe(true)
  })

  describe('All <span> elements', () => {
    let spans = banner.find('span')

    spans.forEach(span => {
      it('should contain text', () => {
        expect(span.text()).not.toBe('')
      })
      it('should have the class "banner__text"', () => {
        expect(span.hasClass('banner__text')).toBe(true)
      })
    })
  })

  describe('All <NavLink> elements', () => {
    let links = banner.find('withRouter(NavLink)')

    links.forEach(link => {
      it('should contain text', () => {
        expect(link.render().text()).not.toBe('')
      })
      it('should have the class "banner__button"', () => {
        expect(link.hasClass('banner__button')).toBe(true)
      })
    })
  })

  describe('The first <NavLink> element', () => {
    let link = banner.find('withRouter(NavLink)').first()

    it('should have the href "projects"', () => {
      expect(link.props().href).toBe('/projects')
    })
  })

  describe('The second <NavLink> element', () => {
    let link = banner.find('withRouter(NavLink)').at(1)

    it('should have the href "create-tender"', () => {
      expect(link.props().href).toBe('/create-tender')
    })
  })
})
