import { makeAssertObjectFunc } from './lib/assert';

const assertObject = makeAssertObjectFunc('INVALID_ARGUMENT');

type Node = string;
type Tree = Record<Node, Node[]>;
type Level = Node[];

const bfs = (tree: Tree): Node[] => {
  const root = Object.keys(assertObject(tree)).at(0);
  return Array.from(genBfs(tree, root)).flat();
};

export default bfs;

function* genBfs(tree: Tree, root?: Node): Generator<Level, Level> {
  if (root === undefined) {
    return [];
  }

  let level = [root];
  while (level.length > 0) {
    yield level;
    level = level.flatMap((node) => tree[node]);
  }
  return level;
}
