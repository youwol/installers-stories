
const runTimeDependencies = {
    "load": {
        "@youwol/os-core": "^0.1.1",
        "@youwol/http-clients": "^1.0.2"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/os-core": {
        "commonjs": "@youwol/os-core",
        "commonjs2": "@youwol/os-core",
        "root": "@youwol/os-core_APIv01"
    },
    "@youwol/http-clients": {
        "commonjs": "@youwol/http-clients",
        "commonjs2": "@youwol/http-clients",
        "root": "@youwol/http-clients_APIv1"
    }
}
const exportedSymbols = {
    "@youwol/os-core": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/os-core"
    },
    "@youwol/http-clients": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/http-clients"
    }
}
export const setup = {
    name:'@youwol/installers-stories',
        assetId:'QHlvdXdvbC9pbnN0YWxsZXJzLXN0b3JpZXM=',
    version:'0.1.1',
    shortDescription:"Collections of installers related to the stories application of YouWol",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/installers-stories',
    npmPackage:'https://www.npmjs.com/package/@youwol/installers-stories',
    sourceGithub:'https://github.com/youwol/installers-stories',
    userGuide:'https://l.youwol.com/doc/@youwol/installers-stories',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    }
}
