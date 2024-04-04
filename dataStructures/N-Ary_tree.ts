class TreeNode<T> {
	value: T;
	children: TreeNode<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}
}

class NaryTree<T> {
	root: TreeNode<T> | null = null;

	constructor(root?: TreeNode<T>) {
		if (root) {
			this.root = root;
		}
	}

	insert(newValue: T): void {
		const newNode = new TreeNode(newValue);
		if (!this.root) {
			this.root = newNode;
			return;
		}

		const queue: TreeNode<T>[] = [this.root];
		while (queue.length > 0) {
			const current = queue.shift()!;
			// If the current node can accept more children, add the new node here
			// For a more balanced tree, you might want to check for the node with the least children
			// This simple implementation just adds to the first available node
			current.children.push(newNode);
			return;
		}
	}

	find(targetValue: T): TreeNode<T> | null {
		if (!this.root) {
			return null;
		}

		const queue: TreeNode<T>[] = [this.root];
		while (queue.length > 0) {
			const current = queue.shift()!;
			if (current.value === targetValue) {
				return current;
			}
			current.children.forEach((child) => queue.push(child));
		}

		return null; // Not found
	}

	print(node: TreeNode<T> | null = this.root, level: number = 0): void {
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

	function buildNode(nodeData: any): TreeNode<T> {
		const node = new TreeNode<T>(nodeData.value);
		if (nodeData.children) {
			node.children = nodeData.children.map((child: any) => buildNode(child));
		}
		return node;
	}

	const root = buildNode(rootNode);
	return new NaryTree<T>(root);
}

const tree = buildTreeFromJSON<number>(jsonPayload);
tree.insert(8); // Inserting a new node with value 8
tree.print(); // Displaying the tree structure

const foundNode = tree.find(5); // Attempting to find node with value 5
if (foundNode) {
	console.log(`Found node with value: ${foundNode.value}`);
} else {
	console.log('Node not found.');
}
