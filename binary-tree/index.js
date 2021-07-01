class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left
    this.right = right
  }

  show = () => {
    console.log(this.data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const node = new Node(data, null, null );

    if (!this.root) {
      this.root = node
      return;
    }
    let current = this.root;
    let parent = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        // 值<父节点，就应该被安排在左子树
        current = current.left;
        // 如果该组中，左子树没有数值，inert进入的node可被安排去做左子树
        if (!current) {
          parent.left = node;
        }

      } else {
        // 值>父节点，就应该被安排在左子树
        current = current.right;
        // 如果该组中，右子树没有数值，inert进入的node可被安排去做右子树
        if (!current) {
          parent.right = node;
        }

      }
    }
  }

  // 前序：中左右
  preOrder = (node) => {
    if (node) {
        node.show();
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
  }

  // 中序：左中右
  laterOrder = (node) => {
    if (node) {
        this.preOrder(node.left);
        node.show();
        this.preOrder(node.right);
    }
  }
  // 后序：左右中
  laterOrder = (node) => {
    if (node) {
        this.preOrder(node.left);
        this.preOrder(node.right);
        node.show();
    }
  }
}

const tree = new Tree();
tree.insert(2)
tree.insert(3);
tree.insert(8);
tree.insert(1)
tree.insert(4);
tree.insert(9);
