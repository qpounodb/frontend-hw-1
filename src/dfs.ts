import { makeAssertObjectFunc } from './lib/assert';

const assertObject = makeAssertObjectFunc('INVALID_ARGUMENT');

type Node = string;
type Tree = Record<Node, Node[]>;

const dfs = (tree: Tree): Node[] => {
  const root = Object.keys(assertObject(tree)).at(0);
  return recDfs(tree, root);
};

export default dfs;

function recDfs(tree: Tree, root?: Node, nodes: Node[] = []): Node[] {
  if (root === undefined) {
    return nodes;
  }

  nodes.push(root);
  const childs = tree[root].slice();

  while (childs.length !== 0) {
    const nextRoot = childs.shift();
    recDfs(tree, nextRoot, nodes);
  }
  return nodes;
}
