import { Installer } from '@youwol/os-core'
import { ExplorerBackend } from '@youwol/http-clients'
export async function install(installer: Installer): Promise<Installer> {
    return installer.with({
        fromManifests: [
            {
                id: '@youwol/installers-stories.basic',
                contextMenuActions: ({ node, explorer, assetsGtwClient }) => [
                    {
                        name: 'New Story',
                        icon: 'fas fa-book',
                        authorized: true,
                        exe: async () => {
                            explorer.newAsset({
                                parentNode:
                                    node as ExplorerBackend.GetFolderResponse,
                                pendingName: 'new story',
                                kind: 'story',
                                request: assetsGtwClient.stories.create$({
                                    queryParameters: {
                                        folderId: node.folderId,
                                    },
                                    body: { title: 'new story' },
                                }),
                            })
                        },
                        applicable: () =>
                            ExplorerBackend.isInstanceOfFolderResponse(node),
                    },
                ],
                applications: ['@youwol/stories'],
                applicationsData: {
                    '@youwol/stories': {
                        toolboxes: [
                            '@youwol/grapes-basics',
                            '@youwol/@youwol/grapes-text-editors',
                        ],
                    },
                },
            },
        ],
    })
}
