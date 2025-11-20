# Reusable blocks for compositions
The theme used for your Jekyll site has multiple layouts. But the most important and flexible is the layout we named `compose` which allow you to stich together various configurable blocks. So a page could for example look like
* A hero header with a large image
* A long read (your page markdown)
* Some featured cards with links to other articles.

That structure allow us to do many compositions using the same blocks in various ways. But sometimes the existing blocks does not suffice for your vision. In this case you could create a completely new layout, but decomposing it into reusable blocks that can be used along side the existing blocks is often a better solution.

To create a new block type that you can use in your `compose` layouts you create a new file in the `_includes/block` directory - e.g. `myAwesomeBlock.html`. You block is most useful if it takes some variables so it can be reused in different contexts. 

One created a user can then use the new block like this in their frontmatter

```
layout: compose # this layout will then use the composision property to generate your page
composition:
  - type: blockName # replace this with the name of the block you are developing. e.g. myAwesomeBlock
    inlineData: # instead of defining data inline you could also reference data in the data folder. e.g. `data: example.test`
      title: my title
      description: |
        my description using markdown is allowed due to the initial pipe and indented newline
```

## Variables
variables are provided as one big content object to the include. So all variable names starts with include.content. So in above example where we only provide two variables to our block we could do

```
{% assign title = include.content.title %}
{% assign description = include.content.description %}
<div>
  <h1>
    {{ title | append: "" | liquify | markdownify }}
  </h1>
  <p>
    {{ description | append: "" | liquify | markdownify }}
  </p>
</div>
```

## Placeholder images when creating new blocks using LLMs
These placeholder images are probably available as examples. It is also possible to use a placeholder service like e.g. `https://via.assets.so/img.jpg?w=1000&h=500&gradientFrom=ef629f&gradientTo=eecda3&gradientAngle=270&f=png&fontColor=ffffff`.

in folder `/assets/images/placeholders/templates` with the with and height described in the file name
* w1200h800.png
* w500h800.png
* w600h400.png
* w1000h600.png
* w1600h800.png