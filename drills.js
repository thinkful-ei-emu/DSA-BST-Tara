const BST = require('./BST');

function tree(t) {
  if (!t) {
    return 0;
  }
  console.log(t);
  return tree(t.left) + t.key + tree(t.right);
}

function height(tree, count = 0) {
  if (!tree) {
    return count;
  }

  count++;

  let right = height(tree.right, count);
  let left = height(tree.left, count);

  if (right >= left) {
    count = right;
  } else {
    count = left;
  }

  return count;
}

function isBST(tree) {
  if (!tree) {
    return true;
  } else if (tree.left && tree.right) {
    if (tree.left.key > tree.key || tree.right.key < tree.key) {
      return false;
    }
  } else if (tree.left && tree.left.key > tree.key) {
    return false;
  } else if (tree.right && tree.right.key < tree.key) {
    return false;
  }
  let right = isBST(tree.right);
  let left = isBST(tree.left);
  return left && right;
}

// function thirdLargest(tree) {
//   function Largest(tree) {
//     if (!tree.right) {
//       return tree;
//     }
//     return Largest(tree.right);
//   }

//   for (let i = 0; i <2; i++) {
//     Largest(tree.right).remove();
//   }

//   return Largest(tree.right);

// }

function isBalanced(tree, count = 0) {
  function counter(tree, count=0) {
    if (!tree) {
      return {least: count, greatest: count};
    }
  
    count++; //n

    let right = counter(tree.right, count); 
    let left = counter(tree.left, count);
    let least;
    let greatest;
  
    (right.greatest >= left.greatest) ? greatest = right.greatest : greatest = left.greatest; 
    
    (right.least <= left.least) ? least = right.least : least = left.least;

    return {greatest, least};
  }
  right = counter(tree.right, count);
  left = counter(tree.left, count);

  let greatest = Math.max(right.greatest, left.greatest);
  let least = Math.min(right.least, left.least);

  return !(greatest-least > 1);
}


  function sameBST(arr1, arr2, curr = arr1[0]){
    if ((arr1[0] !== arr2[0]) || (arr1.length !== arr2.length)) {
      return false;
    }
    else if(arr1.length === 0 ) {
      return true;
    }
    else {
      let bigArr1 = arr1.filter(element => element > curr);
      let bigArr2 = arr2.filter(element => element > curr);
      let smallArr1 = arr1.filter(element => element < curr);
      let smallArr2= arr2.filter(element => element < curr);

      let big = sameBST(bigArr1, bigArr2);
      let small = sameBST(smallArr1, smallArr2);
  
      return (big && small);
    }

  }



function main() {
  const bst = new BST();
  bst.insert(9);
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(8);
  bst.insert(9);
  bst.insert(10);
  bst.insert(13);
  bst.insert(15);
  bst.insert(11);
  bst.insert(17);
  bst.insert(18);
  bst.insert(19);

  console.log(sameBST([3, 5, 4, 6, 1, 2, 0], [3, 1, 5, 2, 4, 6, 0]));
}
//What does it do? It adds up all the values in a tree.
main();
