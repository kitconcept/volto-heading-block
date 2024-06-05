# @kitconcept/volto-heading-block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-heading-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-heading-block)
[![Build Status](https://github.com/kitconcept/volto-heading-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-heading-block/actions)
[![Build Status](https://github.com/kitconcept/volto-heading-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-heading-block/actions)
[![Build Status](https://github.com/kitconcept/volto-heading-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-heading-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Heading Block allows editors to add a heading to a Volto page.

## Screenshot

![Heading-Block](https://github.com/kitconcept/volto-heading-block/raw/master/screenshot.png)

## Screencast

![Heading-Block](https://github.com/kitconcept/volto-heading-block/raw/master/screencast.gif)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-heading-block
cd my-volto-project
```

Add `@kitconcept/volto-heading-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-heading-block"
],

"dependencies": {
    "@kitconcept/volto-heading-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The heading block will show up in the Volto blocks chooser.

## Block configuration

## `show_alignment`

This option will enable an alignment widget in the block settings, allowing you to align the text of the heading. By default, it is set to `false`.

```js
config.blocks.blocksConfig.heading.show_alignment = true;
```

## Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
