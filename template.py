from pathlib import Path

from youwol.pipelines.pipeline_typescript_weback_npm import Template, PackageType, Dependencies, \
    RunTimeDeps, generate_template

template = Template(
    path=Path(__file__).parent,
    type=PackageType.Library,
    name="@youwol/installers-stories",
    version="0.0.2-wip",
    shortDescription="Collections of installers related to the stories application of YouWol",
    author="greinisch@youwol.com",
    dependencies=Dependencies(
        runTime=RunTimeDeps(
            load={
                "@youwol/os-core": "^0.0.6",
                "@youwol/http-clients": "^0.1.9"
            }
        ),
        devTime={
            "@youwol/flux-view": "^0.1.1",
            "rxjs": "^6.5.5",
            "uuid": "^8.3.2",
            "@youwol/cdn-client": "^0.1.3",
        }
    ),
    userGuide=True
    )

generate_template(template)
