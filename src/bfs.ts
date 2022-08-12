import { makeAssertObjectFunc } from './lib/assert';

const assertObject = makeAssertObjectFunc('INVALID_ARGUMENT');

type Node = string;
type Tree = Record<Node, Node[]>;

const bfs = (tree: Tree): Node[] => {
  const root = Object.keys(assertObject(tree)).at(0);
  return root === undefined ? [] : bfsOnQueue(tree, root);
};

export default bfs;

function bfsOnQueue(tree: Tree, root: Node): Node[] {
  const queue = [root];
  let head = 0;
  while (queue.length > head) {
    queue.push(...tree[queue[head]]);
    head += 1;
  }
  return queue;
}
