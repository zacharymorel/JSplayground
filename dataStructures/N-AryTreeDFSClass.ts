class TreeNode<T> {
	value: T;
	children: TreeNode<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}
}

class DFSTree<T> {
	private root: TreeNode<T> | null;

	constructor() {
		this.root = null;
	}

	private buildHelper(nodeData: any): TreeNode<T> {
		let node = new TreeNode(nodeData.value);
		if (nodeData.children) {
			node.children = nodeData.children.map((child: any) =>
				this.buildHelper(child)
			);
		}
		return node;
	}

	build(json: string): void {
		const data = JSON.parse(json);

		this.root = this.buildHelper(data);
	}

	find(value: T): TreeNode<T> | null {
		if (!this.root) return null;

		const stack: TreeNode<T>[] = [this.root];
		while (stack.length > 0) {
			const current = stack.pop();
			if (current && current.value === value) {
				return current;
			}
			if (current) {
				for (const child of current.children) {
					stack.push(child);
				}
			}
		}
		return null;
	}

	insertAt(parentValue: T, newValue: T): void {
		const parentNode = this.find(parentValue);
		if (!parentNode) {
			console.error('Parent node not found');
			return;
		}
		const newNode = new TreeNode(newValue);
		parentNode.children.push(newNode);
	}

	print(node: TreeNode<T> | null = this.root, level: number = 0): void {
		if (!node) return;

		console.log(' '.repeat(level * 2) + node.value);
		node.children.forEach((child) => this.print(child, level + 1));
	}
}

// Example usage
const json = `{
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

const treeReg = new DFSTree();
treeReg.build(json);
console.log(treeReg.find(4)); // Finds and logs the node with value 4
treeReg.insertAt(2, 8); // Inserts a new node with value 8 as a child of the node with value
treeReg.insertAt(8, 9); // Inserts a new node with value 8 as a child of the node with value
treeReg.print();

/**
 *
 *
 *
 *
 * DYNAMIC
 *
 *
 */
console.log('-----------------------------------------------------');

type DynamicChildren<T> = {
	[key: string]: TNode<T>[];
};

class TNode<T> {
	value: T;
	children: DynamicChildren<T>;

	constructor(value: T) {
		this.value = value;
		this.children = {};
	}
}

class DFSTreeDynamic<T> {
	root: TNode<T> | null;

	constructor() {
		this.root = null;
	}
	private buildHelper(nodeData: any): TNode<T> {
		let node = new TNode(nodeData.value);
		Object.keys(nodeData).forEach((key: string, i: number) => {
			if (key !== 'value' && Array.isArray(nodeData[key])) {
				node.children[key] = nodeData[key].map((child: any) =>
					this.buildHelper(child)
				);
			}
		});
		return node;
	}

	build(json: string): void {
		const data = JSON.parse(json);
		this.root = this.buildHelper(data);
	}

	// MISSING NEEDLE
	find(path: string[]): TNode<T> | null {
		if (!this.root || path.length === 0) return null;
		let current: TNode<T> | null = this.root;
		for (let i = 0; i < path.length; i++) {
			const key = path[i];
			if (!current || !current.children[key]) return null;
			current = current.children[key][0]; // Assuming the path leads to the first child in each array
		}
		return current;
	}

	insertAt(path: string[], newValue: T): void {
		if (path.length === 0) {
			console.error('Path cannot be empty');
			return;
		}

		if (!this.root) {
			console.error('The tree is empty');
			return;
		}

		let current: TNode<T> | null = this.root;
		for (let i = 0; i < path.length - 1; i++) {
			const key = path[i];
			if (!current || !current.children[key]) {
				console.error('Path not found');
				return;
			}
			current = current.children[key][0]; // Navigate using the first child as a placeholder
		}

		const newNode = new TNode(newValue);
		const lastKey = path[path.length - 1];
		if (current.children[lastKey]) {
			current.children[lastKey].push(newNode);
		} else {
			current.children[lastKey] = [newNode];
		}
	}

	// Prints the tree structure
	print(): void {
		const printHelper = (node: TNode<T> | null, depth: number): string => {
			if (!node) return '';
			let str = `${' '.repeat(depth * 2)}${node.value}\n`;
			Object.keys(node.children).forEach((key: string) => {
				// @ts-ignore
				node.children[key].forEach((childNode) => {
					str += printHelper(childNode, depth + 1);
				});
			});
			return str;
		};

		console.log(printHelper(this.root, 0));
	}
}

// Example usage
const dynamicChildrenTreeEx = `{
	"value": 1,
	"levelOne": [
	  {
		"value": 2,
		"levelTwo": [
		  { "value": 4 },
		  { "value": 5 }
		]
	  },
	  {
		"value": 3,
		"levelTwo": [
		  { "value": 6 },
		  { "value": 7,
			"levelThree": [
			  { "value": 8 },
			  { "value": 9 }
			]
		  }
		]
	  }
	]
  }`;

const treeDynamic = new DFSTreeDynamic<number>();
treeDynamic.build(dynamicChildrenTreeEx);
console.log(
	"treeDynamic.find(['levelOne', 'levelTwo'])",
	treeDynamic.find(['levelOne', 'levelTwo'])
); // Example of finding a path
treeDynamic.insertAt(['levelOne', 'levelTwo', 'levelThree'], 10); // Inserts a new node with value 10
treeDynamic.print();
