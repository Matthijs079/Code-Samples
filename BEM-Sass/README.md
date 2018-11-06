BEM en Sass
===

In these file are examples of a BEM structure and the Sass structure with the BEM.

BEM
---
In this folder there is a [index.html](./index.html) file where the BEM structure has been applied.

The BEM structure consists of a block name where you put elements behind. For example, you have a projects section where you show all your projects, than the section classname is __project__ but the `div` where you put the description of your project has the classname __project__description.__

In BEM there are not only blocks and elements, there are also modifiers.
These modifiers you use if there are two exactly the same parts of the website, but one of these parts needs to be a different color. Then you use a modifier to change the color and it looks like this __project--blue.__
But you can also add a modifier on an element, this looks like __project__description--red.__

Sass
---

In Sass I think the BEM structure fits perfectly with one and other.
So, you can nest your code in Sass and with the BEM structure and you get very readable en DRY(Don't repeat yourself) code.
So, you can style your block by the example below.

		.projects{
			css code here
		}

In normale CSS you need to style it like this, if you have a element.

		.project__description{
			css code here
		}

But with Sass you can nest your code like this, so it is more readable.

		.projects{
			css code here

			&__description{
				Description styling goes here
			}
		}