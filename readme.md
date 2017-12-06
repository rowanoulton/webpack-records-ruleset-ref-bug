# Webpack records issue

To reproduce:

```bash
# first
npm i

# generate records
webpack --config a.config.js

# then regenerate records
webpack --config b.config.js
```

The first set of records will look like this:

```json
{
  "modules": {
    "byIdentifier": {
      "node_modules/cache-loader/dist/cjs.js??ref--0-0!a.js": 0
    },
    "usedIds": {
      "0": 0
    }
  },
  "chunks": {
    "byName": {
      "a": 0
    },
    "byBlocks": {},
    "usedIds": {
      "0": 0
    }
  }
}
```

The second set of records will have a duplicate entry:

```json
{
  "modules": {
    "byIdentifier": {
      "node_modules/cache-loader/dist/cjs.js??ref--0-0!a.js": 0,
      "node_modules/cache-loader/dist/cjs.js??ref--1-0!a.js": 1
    },
    "usedIds": {
      "0": 0,
      "1": 1
    }
  },
  "chunks": {
    "byName": {
      "a": 0
    },
    "byBlocks": {},
    "usedIds": {
      "0": 0
    }
  }
}
```

The only difference of which is the RuleSet reference (`ref--1-0` instead of `ref--0-0`).


The results of both runs have been checked in at `a.records.json` and `b.records.json` respectively.
