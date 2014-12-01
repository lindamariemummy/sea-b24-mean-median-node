'use strict';
//breaks down list into subarray of length 1, recursively recombines sublists using mergeLists()
module.exports = function breakList(list) {
  var splitList1, splitList2, splitIndex, listLength;
  splitList1 = [];
  splitList2 = [];
  listLength = list.length;

  if (listLength == 1) { //list is already sorted if it has only one entry
    return list;
  }
  else {
    splitIndex = Math.floor(listLength * 0.5);
    splitList1 = breakList(list.slice(0, splitIndex));
    splitList2 = breakList(list.slice(splitIndex, listLength + 1));
    return mergeLists(splitList1, splitList2);
  }
};

//assumes list1 and list2 are sorted, merges lists together
function mergeLists(list1, list2) {
  var counter1, counter2, sortedArray, sortedArrayCounter;
  counter1 = 0;
  counter2 = 0;
  sortedArray = [];
  sortedArrayCounter = 0;

  //merges lists
  while (sortedArrayCounter < (list1.length + list2.length))
  {
    //list1 is done, so use list2
    if (counter1 == list1.length || list2[counter2] < list1[counter1]) {
      sortedArray[sortedArrayCounter] = list2[counter2];
      counter2++;
    }
    //list2 is done so use list1
    else if (counter2 == list2.length || list1[counter1] < list2[counter2]) {
      sortedArray[sortedArrayCounter] = list1[counter1];
      counter1++;
    }
    //leading entry in list 2 is larger then leading entry in list 1
    else if (list1[counter1] < list2[counter2]) {
      sortedArray[sortedArrayCounter] = list1[counter1];
      counter1++;
    }
    //leading entry in list 2 is larger (or equal) to leading entry in list 1
    else if (list2[counter2] <= list1[counter1]) {
      sortedArray[sortedArrayCounter] = list2[counter2];
      counter2++;
    }
    sortedArrayCounter++;
  }

  //returns array (which is now sorted in increasing order)
  return sortedArray;
}
