import { Installer, ExplorerState } from '@youwol/os-core'
import { ExplorerBackend, AssetsGateway } from '@youwol/http-clients'
import { raiseHTTPErrors } from '@youwol/http-primitives'

export async function install(installer: Installer): Promise<Installer> {
    return installer.with({
        fromManifests: [
            /* ExplorerBackend.GetItemResponse | ExplorerBackend.GetFolderResponse  AssetsGatewayClient*/
            {
                id: '@youwol/installers-stories.basic',
                contextMenuActions: ({
                    node,
                    explorer,
                    assetsGtwClient,
                }: {
                    node:
                        | ExplorerBackend.GetItemResponse
                        | ExplorerBackend.GetFolderResponse
                    explorer: ExplorerState
                    assetsGtwClient: AssetsGateway.AssetsGatewayClient
                }) => [
                    {
                        name: 'New Story',
                        icon: { class: 'fas fa-book' },
                        enabled: () => true,
                        exe: async () => {
                            explorer.newAsset({
                                parentNode: node,
                                pendingName: 'new story',
                                response$: assetsGtwClient.stories
                                    .create$({
                                        queryParameters: {
                                            folderId: node.folderId,
                                        },
                                        body: { title: 'new story' },
                                    })
                                    .pipe(raiseHTTPErrors()),
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
