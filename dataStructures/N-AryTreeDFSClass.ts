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

	build(json: string): void {
		const data = JSON.parse(json);
		const buildHelper = (nodeData: any): TreeNode<T> => {
			let node = new TreeNode(nodeData.value);
			if (nodeData.children) {
				node.children = nodeData.children.map((child: any) =>
					buildHelper(child)
				);
			}
			return node;
		};
		this.root = buildHelper(data);
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

const tree = new DFSTree();
tree.build(json);
console.log(tree.find(4)); // Finds and logs the node with value 4
tree.insertAt(2, 8); // Inserts a new node with value 8 as a child of the node with value
tree.insertAt(8, 9); // Inserts a new node with value 8 as a child of the node with value
tree.print();

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
