type Scope = any;

interface NodePath {
    node: Node;
    parent: NodePath;
    scope: Scope;
}

type RecastParserOptions = any;
type RecastPrinterOptions = any;

interface Parser {
    parse(source: string, options?: RecastParserOptions);
}

interface AstTypes {
    Type: any;
    builtInTypes: any;
    namedTypes: any;
    builders: any;
    defineMethod: any;
    getFieldNames: any;
    getFieldValue: any;
    eachField: any;
    someField: any;
    getSupertypeNames: any;
    astNodesAreEquivalent: ((a: Node, b: Node) => boolean) & {
        assert(a: Node, b: Node): void;
    };
    finalize(): void;
    Path: any;
    NodePath: any;
    PathVisitor: any;
    use: any;
}
