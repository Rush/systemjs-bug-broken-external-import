SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.19"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "defaultExtension": "js",
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    ".": {}
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular-noVNC": "github:virtkick/angular-noVNC@master",
    "pako": "npm:pako@1.0.4"
  },
  packages: {
    "github:virtkick/angular-noVNC@master": {
      "map": {
        "angular": "npm:angular@1.6.1"
      }
    }
  }
});
