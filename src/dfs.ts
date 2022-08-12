import { makeAssertObjectFunc } from './lib/assert';

const assertObject = makeAssertObjectFunc('INVALID_ARGUMENT');

type Node = string;
type Tree = Record<Node, Node[]>;

const dfs = (tree: Tree): Node[] => {
  const root = Object.keys(assertObject(tree)).at(0);
  return root === undefined ? [] : dfsOnStack(tree, root);
};

export default dfs;

interface Meta {
  node: Node;
  visits: number;
}

function dfsOnStack(tree: Tree, root: Node): Node[] {
  const stack: Meta[] = [{ node: root, visits: 0 }];
  const result: Node[] = [];
  while (stack.length > 0) {
    const { node, visits } = stack.pop()!;
    if (visits === 0) {
      result.push(node);
    }
    const nextRoot = tree[node].at(visits);
    if (nextRoot !== undefined) {
      stack.push({ node, visits: visits + 1 });
      stack.push({ node: nextRoot, visits: 0 });
    }
  }
  return result;
}
