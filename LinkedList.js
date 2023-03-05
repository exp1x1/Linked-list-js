import { Node } from './node.js'

const LinkedList = () => {
  Head = null;
  Size = 0;

  const append = (value) => {
    let node = Node(value);
    let current;
    if (Head === null) {
      Head = node;
    } else {
      current = Head;
      while (!(current.nextNode === null)) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    Size++;
  };

  const prepend = (value) => {
    Head = Node(value, Head);
    Size++;
  };

  const size = () => {
    console.log(Size);
    return Size;
  };

  const head = () => {
    console.log(Head);
    return Head;
  };

  const tail = () => {
    let current = Head;
    while (!(current.nextNode === null)) {
      current = current.nextNode;
    }
    return current;
  };

  const at = (index) => {
    if (index >= Size) {
      console.log("index not found");
    } else {
      let current = Head;
      for (let i = 0; i <= index; i++) {
        if (i == index) {
          // console.log(`${i} : ${current.value}`);
          return current;
        }
        current = current.nextNode;
      }
    }
  };

  const pop = () => {
    let node;
    if (Size === 0) {
      console.log("no node in list");
    } else if (Size === 1) {
      node = at(Size - 1);
    } else {
      node = at(Size - 2);
    }
    node.nextNode = null;
    Size -= 1;
  };

  const contain = (value) => {
    let current = Head;
    for (let i = 0; i < Size; i++) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let current = Head;
    for (let i = 0; i < Size; i++) {
      if (current.value == value) {
        return i;
      }
      current = current.nextNode;
    }

    return null;
  };

  const toString = () => {
    if (Size === 0) {
      console.log("list is empty");
      return;
    }
    let current = Head;
    for (let i = 0; i < Size; i++) {
      console.log(`${i} : ${current.value}`);
      current = current.nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contain,
    find,
    toString,
  };
};

const linklist = LinkedList();

linklist.prepend(1);
linklist.prepend("kob");
linklist.append("pop");
linklist.append("non");
linklist.toString();
