// BFS CLASS BASED
class BfsTreeNode<T> {
	value: T;
	children: BfsTreeNode<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}
}

class NaryTree<T> {
	root: BfsTreeNode<T> | null = null;

	constructor(root?: BfsTreeNode<T>) {
		if (root) {
			this.root = root;
		}
	}

	// Insert newValue as a child of the node with parentValue
	insertAt(newValue: T, parentValue: T): boolean {
		if (!this.root) {
			console.log('Tree is empty. Inserting at root.');
			this.root = new BfsTreeNode(newValue);
			return true;
		}

		const queue: BfsTreeNode<T>[] = [this.root];
		while (queue.length > 0) {
			const current = queue.shift()!;
			if (current.value === parentValue) {
				current.children.push(new BfsTreeNode(newValue));
				return true; // Successfully inserted
			}

			current.children.forEach((child) => queue.push(child));
		}

		console.log(`Parent node with value ${parentValue} not found.`);
		return false; // Parent not found, insertion not done
	}

	find(targetValue: T): BfsTreeNode<T> | null {
		if (!this.root) {
			return null;
		}

		const queue: BfsTreeNode<T>[] = [this.root];
		while (queue.length > 0) {
			const current = queue.shift()!;
			if (current.value === targetValue) {
				return current;
			}
			current.children.forEach((child) => queue.push(child));
		}

		return null; // Not found
	}

	print(node: BfsTreeNode<T> | null = this.root, level: number = 0): void {
		if (!node) return;

		console.log(' '.repeat(level * 2) + node.value);
		node.children.forEach((child) => this.print(child, level + 1));
	}
}

// Example of building a tree from JSON, inserting a new node, and finding a node
const jsonPayload = `{
  "value": 1,
  "children": [
    {
      "value": 2,
      "children": [
        { "value": 4 },
        { "value": 5 }
      ]
    },
    {
      "value": 3,
      "children": [
        { "value": 6 },
        { "value": 7 }
      ]
    }
  ]
}`;

function buildTreeFromJSON<T>(json: string): NaryTree<T> {
	const rootNode = JSON.parse(json);

	function buildNode(nodeData: any): BfsTreeNode<T> {
		const node = new BfsTreeNode<T>(nodeData.value);
		if (nodeData.children) {
			node.children = nodeData.children.map((child: any) => buildNode(child));
		}
		return node;
	}

	const root = buildNode(rootNode);
	return new NaryTree<T>(root);
}

const bfsTree = buildTreeFromJSON<number>(jsonPayload);
bfsTree.insertAt(8, 4); // Inserting 8 as a child of 4
bfsTree.insertAt(9, 4); // Inserting 8 as a child of 4
bfsTree.insertAt(10, 4); // Inserting 8 as a child of 4
bfsTree.print(); // Displaying the tree structure

const foundNode = bfsTree.find(5); // Attempting to find node with value 5
if (foundNode) {
	console.log(`Found node with value: ${foundNode.value}`);
} else {
	console.log('Node not found.');
}
