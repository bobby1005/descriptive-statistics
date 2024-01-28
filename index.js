class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    mode() {
      const frequencyMap = new Map();
      for (const value of this.data) {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      }
  
      let mode;
      let maxFrequency = 0;
  
      for (const [value, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
          mode = value;
          maxFrequency = frequency;
        }
      }
  
      return mode;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map(value => (value - meanValue) ** 2);
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    quartiles() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const medianValue = this.median();
      const lowerHalf = sortedData.filter(value => value < medianValue);
      const upperHalf = sortedData.filter(value => value > medianValue);
  
      const lowerQuartile = this.medianOfSortedData(lowerHalf);
      const upperQuartile = this.medianOfSortedData(upperHalf);
  
      return {
        lowerQuartile,
        median: medianValue,
        upperQuartile,
      };
    }
  
    interquartileRange() {
      const { lowerQuartile, upperQuartile } = this.quartiles();
      return upperQuartile - lowerQuartile;
    }
  
    medianOfSortedData(sortedData) {
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  }
  promptUser();

  main();