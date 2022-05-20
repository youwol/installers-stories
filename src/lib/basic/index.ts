import { Core, Explorer } from '@youwol/platform-essentials'

export async function install(
    installer: Core.Installer,
): Promise<Core.Installer> {
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
                                parentNode: node as Explorer.AnyFolderNode,
                                pendingName: 'new story',
                                kind: 'story',
                                request: assetsGtwClient.stories.create$({
                                    queryParameters: { folderId: node.id },
                                    body: { title: 'new story' },
                                }),
                            })
                        },
                        applicable: () => Explorer.isInstanceOfFolderNode(node),
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
