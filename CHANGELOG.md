# kitconcept's volto-heading-block Release Notes

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.docs.plone.org/volto/developer-guidelines/contributing.html#create-a-pull-request
-->

<!-- towncrier release notes start -->

## 2.3.0 (2023-06-06)

### Feature

- Add Brazilian Portuguese translation @ericof [#14](https://github.com/kitconcept/volto-export/pull/14)


## 2.2.0 (2023-02-20)

### Feature

- Move to the new add-on testing based on docker @sneridagh [#13](https://github.com/kitconcept/volto-export/pull/13)

### Bugfix

- Fix decoding of html entities @reebalazs [#10](https://github.com/kitconcept/volto-export/pull/10)
- Include headings in the volto Table of Contents block. @danalvrz [#12](https://github.com/kitconcept/volto-export/pull/12)


## 2.1.2 (2022-09-12)

### Bugfix

- Fix copied and pasting from heading block to heading block will create html for antother heading block inside the one pasted in @jackahl

## 2.1.1 (2022-08-29)

### Bugfix

- Fix editor can't add a blank in firefox @iFlameing

## 2.1.0 (2022-07-22)

### Feature

- Remove option to chose heading order when only one heading type is selected @kindermann

## 2.0.1 (2022-06-02)

### Bugfix

- Fix default value for heading text @sneridagh
- Move the type of block to `text` group @sneridagh
- Cleanup if html is pasted, convert it to plain text @sneridagh
- Add inner container to edit mode @sneridagh

## 2.0.0 (2022-05-26)

### Breaking

- Overhauled the `Edit` component now it's class-styled since `react-contenteditable` and the `content-editable` browser feature has some problems with the functional lifecycle @sneridagh

### Feature

- Better self-focus management @sneridagh
- Add support for new Volto 16 styling wrapper @sneridagh

### Bugfix

- Do not allow line breaks @sneridagh

### Internal

- Remove from npm packaging `README` resources @sneridagh

## 1.0.0 (2022-04-22)

### Bugfix

- Fix heading block @iRohitSingh

### Internal

- Added github workflows @robgietema

## 1.0.0-alpha.1 (2021-10-23)

### Feature

- Always center by default the heading @sneridagh

### Bugfix

- Fix bug in `View` because the default is not set @sneridagh

## 1.0.0-alpha.0 (2021-10-21)

### Feature

- Initial release @sneridagh @tisto
