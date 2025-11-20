# Data
The `_data` folder is where you can provided structured data as json or yaml to configure the various sectiona and components of your website.

## Footer
`_data/footer.yml` unless you have overwritten the footer in `_includes/customFooter.html` then you can configure it here. If you have a multilingual site, then you should create a footer for each language following the convention of a new folder per not default language. E.g. `_data/es/footer.yml` for spanish version. The code needs to match your definition in `_data/languages.yml`

## Navigation
`_data/navigation.yml` unless you have overwritten the footer in `_includes/navbar.html` then you can configure it here. Like with the footer you should create sufbolders for language versions. Then the theme will automatically use those.

## Languages
`_data/languages.yml` this is where you define what languages you have translated your site into. You can of course just have many pages witten in multiple languages, but if you want them linked through a language menu and couples to translationed menus, then you need to follow the conventions of the theme.

## Translations
`_data/translations.yml` this is the file to use for translating labels. E.g. the text appearing for the "Table of Content" or when linking between language versions.

# Other files
The remaining files are optional and can be named whatever you find most intuitive. Jekyll gives you access to the variables inside these files when building your pages.
It is also how you can configure the reusable blocks (e.g. the title and background for a heroImage block). The page config can then refer to this file and property for its content. For example a page with a `layout: compose` will have a property in the frontmatter that defines what blocks to create the page from like

```yml
composition:
  - type: heroImage # the block type. If no data is provided, then it will use the data defined in the frontmatter (e.g. title and background)
  - type: stats  # block type
    data: examples.stats # the content to fill into the block type. e.g. a yaml file called "example" with a property called "stats". Jekyll is very flexible in resolving these https://jekyllrb.com/docs/datafiles/
  - type: split
    data: examples.herbariumImageExample
  - type: features
    data: examples.couldBeAnyName
```