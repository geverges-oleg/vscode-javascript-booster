declare module 'jscodeshift' {
    import { AstNode, NamedType, NodePath } from 'ast-types';

    export interface Collection<TNode = AstNode> {
        firstNode(): TNode | null;
        firstPath(): NodePath<TNode> | null;
        findNodeAtPosition(pos: { line: number; column: number }): Collection;
        thisOrClosest<TNode>(type: NamedType<TNode>, filter?: any): Collection<TNode>;
    }
}