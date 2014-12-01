'use strict';

var mergeSort = require('./mergeSort.js');

function MeanMedianMode() {

  //calculates the average of the numbers in the "values" array
  this.mean = function(values) {
    return values.reduce(function(prevVal, newVal) {
      return Number(prevVal) + Number(newVal);
    }) / (values.length);
  };

  //calculates the median of the numbers in the "values" array
  this.median = function(values) {
    var sortedValues = mergeSort(values);
    //odd number of entries
    if (sortedValues.length % 2 === 1) {
      return sortedValues[(sortedValues.length - 1) / 2];
    }
    else { //even number of entries
      return (sortedValues[sortedValues.length / 2] +
        sortedValues[(sortedValues.length / 2) - 1]) / 2;
    }
  };

  /*calculates the mode of the numbers in the "values" array.
  If the mode is a single value, the function returns a single mode.
  If there are multiple modes, the function return an array of modes. */
  this.mode = function(values) {
    var sortedValues, currentMode, currentModeFrequency, tempValue, tempValueFrequency, i;
    sortedValues = mergeSort(values);
    currentMode = [];
    currentModeFrequency = 1;

    currentMode[0] = sortedValues[0]; //assumes mode is the first array entry
    i = 1;

    //counts number of occurences of current mode
    while (currentMode == sortedValues[i]) {
      currentModeFrequency++;
      i++;
    }

    while (i < sortedValues.length) {

      //counts number of instances of the next value in the array
      tempValue = sortedValues[i];
      tempValueFrequency = 0;
      while (sortedValues[i] == tempValue) {
        tempValueFrequency++;
        i++;
      }

      //updates the mode
      if (tempValueFrequency > currentModeFrequency) {
        currentModeFrequency = tempValueFrequency;
        currentMode = [];
        currentMode.push(tempValue);
      }
      else if (tempValueFrequency == currentModeFrequency) {
        currentMode.push(tempValue);
      }
    }

    //returns mode or mode array
    return (currentMode.length === 1) ? currentMode[0] : currentMode;
  };
}

module.exports =  new MeanMedianMode();
