React and unit testing
===

In this folder is a example of a component and the unit tests of that component.

Banner
---

In this banner component we needed to make a bar with buttons and text below the navigation.

There are 2 textfields on the outside of the component  and to buttons on the inside these link to projects en create-tender. In this porject we have made a component Navlink to link all the buttons and links to the right path.

Logo
---

In the logo folder there is a component for the logo in the navigation this is a image that when you click on it goes to the homepage.

Unit testing
---

The test are made with jest and enzyme.

With the test we start always with a describe to desribe what we are going to test.

In the describe we make the test this do you with a expect this is exactly what it is. It expects a outcome.
In the expect function you first define the component and than you search where you are looking for to test.

			it('should contain 2 <span> tags', () => {

			expect(shallow(<Banner />).find('span').length).toBe(2)
			
			})

In the test above I'm looking for the number of `spans` used in the component.
In the expect we first define what we need so search we to the elements `span` and check the lenght of them, at the end of the expect you check if the the outcome is the same as we want.