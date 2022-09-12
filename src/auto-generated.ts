
const runTimeDependencies = {
    "load": {
        "@youwol/os-core": "^0.1.0",
        "@youwol/http-clients": "^1.0.0"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/os-core": "@youwol/os-core_APIv01",
    "@youwol/http-clients": "@youwol/http-clients_APIv1"
}
export const setup = {
    name:'@youwol/installers-stories',
    assetId:'QHlvdXdvbC9pbnN0YWxsZXJzLXN0b3JpZXM=',
    version:'0.1.0',
    shortDescription:"Collections of installers related to the stories application of YouWol",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/installers-stories',
    npmPackage:'https://www.npmjs.com/package/@youwol/installers-stories',
    sourceGithub:'https://github.com/youwol/installers-stories',
    userGuide:'https://l.youwol.com/doc/@youwol/installers-stories',
    apiVersion:'01',
    runTimeDependencies,
    externals
}
