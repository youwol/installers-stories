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
                        icon: { class: 'fas fa-book' },
                        enabled: () => true,
                        exe: async () => {
                            explorer.newAsset({
                                parentNode:
                                    node as ExplorerBackend.GetFolderResponse,
                                pendingName: 'new story',
                                response$: assetsGtwClient.stories.create$({
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
                    {
                        name: 'Upgrade plugins',
                        icon: { class: 'fas fa-level-up-alt' },
                        enabled: () => true,
                        exe: async () => {
                            const storyNode = node as { rawId: string }
                            assetsGtwClient.stories
                                .upgradePlugins$({
                                    storyId: storyNode.rawId,
                                    body: {},
                                })
                                .subscribe()
                        },
                        applicable: () =>
                            ExplorerBackend.isInstanceOfItemResponse(node) &&
                            node.kind == 'story',
                    },
                ],
                applications: ['@youwol/stories'],
                applicationsData: {
                    '@youwol/stories': {
                        toolboxes: [
                            '@youwol/grapes-basics',
                            '@youwol/grapes-text-editors',
                        ],
                    },
                },
            },
        ],
    })
}
