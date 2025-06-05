import { BaseMavenRepo } from './BaseMavenRepo.js'

export class LibRepoStructure extends BaseMavenRepo {

    public static readonly MINECRAFT_GROUP = 'net.minecraft'
    public static readonly MINECRAFT_CLIENT_ARTIFACT = 'client'

    public static readonly FORGE_GROUP = 'net.minecraftforge'
    public static readonly FORGE_ARTIFACT = 'forge'
    public static readonly NEOFORGE_GROUP = 'net.neoforged'
    public static readonly NEOFORGE_ARTIFACT = 'neoforge'
    public static readonly FMLCORE_ARTIFACT = 'fmlcore'
    public static readonly JAVAFMLLANGUAGE_ARTIFACT = 'javafmllanguage'
    public static readonly MCLANGUAGE_ARTIFACT = 'mclanguage'
    public static readonly LOWCODELANGUAGE_ARTIFACT = 'lowcodelanguage'

    constructor(
        absoluteRoot: string,
        relativeRoot: string
    ) {
        super(absoluteRoot, relativeRoot, 'lib')
    }

    public getLoggerName(): string {
        return 'LibRepoStructure'
    }

    public getLocalForge(version: string, classifier?: string, group = LibRepoStructure.FORGE_GROUP, artifact = LibRepoStructure.FORGE_ARTIFACT): string {
        return this.getArtifactByComponents(
            group,
            artifact,
            version, classifier, 'jar')
    }

}
