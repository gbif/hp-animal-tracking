---
layout: home
klass: home
lang-ref: home
permalink: /
title: Wild Moves
description: Animal tracking data portal
videos: ["/assets/images/eurodeer-02070010.mp4"]
imageLicense: "Red deer with a GPS collar in Trentino, Italy. Video by Fondazione Edmund Mach/Euromammals."
height: 60vh
composition:
  - type: heroVideo
  - type: stats
    inlineData:
      features:
        - title: <span data-ajax-url="https://api.gbif.org/v1/dataset/search?networkKey=ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b">~350</span>
          description: Datasets
          href: /dataset/search
        - title: <span data-ajax-path="data.occurrenceSearch.cardinality.speciesKey" data-ajax-url="https://graphql.gbif.org/graphql?query=query{occurrenceSearch(predicate:{key:%22networkKey%22,type:equals,value:%22ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b%22}){_predicate%20cardinality{speciesKey}}}">~70</span>
          description: Species
          href: /occurrence/search?view=dashboard&layout=W1t7ImlkIjoiaG1sbHQiLCJwIjp7fSwidHJhbnNsYXRpb24iOiJkYXNoYm9hcmQudGF4YSIsInQiOiJ0YXhhIn1dXQ%3D%3D
        - title: <span data-ajax-url="https://api.gbif.org/v1/occurrence/search?networkKey=ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b&limit=0">~15,000,000</span>
          description: Occurrences
          href: /occurrence/search
  - type: split
    inlineData:
      title: Search for data
      description: >
        Wild Moves helps you discover animal tracking and bio-logging datasets published to [GBIF](https://www.gbif.org).
        Search metadata to find datasets relevant to you.
        Or dive into the occurrence data these datasets collectively contain.
      cta:
        - text: Explore metadata
          href: /dataset/search
        - text: Explore occurrences
          href: /occurrence/search
    background: "{{ site.data.images.gull.src }}"
    imageLicense: "{{ site.data.images.gull.caption }}"
  - type: split
    inlineData:
      title: Make your data discoverable
      description: >
        Want others to discover your animal tracking data and use it for research and conservation?
        Publish your dataset to [GBIF](https://www.gbif.org) and assign it
        to the [Bio-logging network](https://www.gbif.org/network/ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b/dataset)
        and it will automatically appear on Wild Moves.
      cta:
        - text: Become a publisher
          href: https://www.gbif.org/become-a-publisher
      background: "{{ site.data.images.shark.src }}"
      imageLicense: "{{ site.data.images.shark.caption }}"
      reverse: true
  - type: floatingText
    inlineData:
      klass: hp
      title: Interested in camera trap data?
      description: >
        [Visit Wild Album](https://camera-trap.hp.gbif-staging.org){:.button}
      hasWhiteText: true
---
