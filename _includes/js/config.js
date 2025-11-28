/*
This is the file in which you configure the data widgets.
See: https://hp-theme.gbif-staging.org/data-exploration-config
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "DATASET"
  ],
  "dataHeader": {
    "enableApiPopup": true,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": "#001972",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "DARK",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "networkKey",
      "value": "ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b"
    },
    "highlightedFilters": [
      "taxonKey",
      "organismId",
      "country",
      "eventDate",
      "datasetKey",
      "publishingOrg",
      "collectionCode"
    ],
    "excludedFilters": [
      // RECORD
      // "basisOfRecord",
      "collectionKey",
      // "collectionCode",
      // "datasetId",
      // "datasetName",
      "institutionKey",
      "institutionCode",
      // "license",
      
      // OCCURRENCE
      "catalogNumber",
      "degreeOfEstablishment",
      "establishmentMeans",
      // "lifeStage",
      // "mediaType",
      // "occurrenceId",
      // "occurrenceStatus",
      // "organismQuantity", TODO: Why are there no data?
      "organismQuantityType",
      "pathway",
      "recordNumber",
      "recordedBy",
      "recordedById",
      "relativeOrganismQuantity",
      // "sex",

      // ORGANISM
      // "organismID",
      "previousIdentifications",

      // MATERIAL ENTITY
      "associatedSequences", // TODO: ?
      "preparations",
      
      // EVENT
      // "endDayOfYear",
      // "eventId",
      // "eventDate",
      "fieldNumber",
      // "month",
      "sampleSizeUnit",
      "sampleSizeValue",
      // "samplingProtocol",
      // "startDayOfYear",
      "year",

      // LOCATION
      // "gadmGid",
      // "continent",
      // "coordinateUncertaintyInMeters",
      // "country",
      // "depth",
      // "distanceFromCentroidInMeters",
      // "elevation",
      "georeferencedBy",
      // "gbifRegion",
      "higherGeography",
      "island",
      "islandGroup",
      // "locality",
      // "location",
      // "publishedByGbifRegion",
      "stateProvince",
      "waterBody",

      // GEOLOGICAL CONTEXT
      "biostratigraphy",
      "geologicalTime",
      "lithostratigraphy",

      // IDENTIFICATION
      // "identifiedBy",
      "identifiedById",
      "typeStatus",
      // "verbatimScientificName",
      
      // TAXON
      // "taxonKey",
      "taxonId",
      
      // PROVENANCE
      // "datasetKey",
      // "hostingOrganizationKey",
      // "networkKey",
      // "programme",
      // "projectId",
      // "publishingOrg",
      // "publishingCountry",
      // "protocol",
      // "repatriated",

      // OTHER
      // "dwcaExtension",
      // "gbifId",
      // "isInCluster",
      "iucnRedListCategory",
      "isSequenced"
      // "issue",
      // "lastInterpreted",
      // "taxonomicIssue",
      // "q"
    ],
    "availableTableColumns": [
      "scientificName",
      "commonName",
      "organismId",
      "country",
      "coordinates",
      "locality",
      "eventDate",
      "year",
      "individualCount",
      "lifeStage",
      "sex",
      "identifiedBy",
      "datasetKey",
      "publishingOrg",
      "collectionCode"
      // "basisOfRecord",
      // "catalogNumber",
      // "collectionKey",
      // "establishmentMeans",
      // "features",
      // "fieldNumber",
      // "higherGeography",
      // "institutionCode",
      // "institutionKey",
      // "iucnRedListCategory",
      // "media",
      // "preparations",
      // "recordedBy",
      // "recordNumber",
      // "specimenTriplet",
      // "stateProvince",
      // "typeStatus",
    ],
    "defaultEnabledTableColumns": [
      "scientificName",
      "commonName",
      "organismId",
      "country",
      "eventDate",
      "datasetKey",
      "collectionCode"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      // "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 30,
      "lng": 0,
      "zoom": 2
    }
  },
  "datasetSearch": {
    scope: {
      networkKey: ["ab013f3a-3c00-42cb-9fdb-cb5f4ba20a4b"]
    },
    highlightedFilters: ["q", "publishingCountry", "publishingOrg", "projectId"],
    excludedFilters: ["type"]
    // More filters: "dwcaExtension", "hostingOrg", "license", "networkKey"
  },
  "publisherSearch": {},
}
