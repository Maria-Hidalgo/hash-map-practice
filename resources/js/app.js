//Creating the hashmap
class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }

//Creating the has method that takes the key parameter
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
          hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode %this.hashmap.length;
    ;
      }
    
//Creating a assign method
    assign(key, value) {
        const arrayIndex = this.hash(key);
        this.hashmap[arrayIndex] = value;
      }

//Creating a retrieve method
      retrieve(key) {
        const arrayIndex = this.hash(key);
        return this.hashmap[arrayIndex];
      }
    
    
    }

  module.exports = HashMap;

const BMS = new HashMap(3);
BMS.assign('perseverance', 'persistence in doing something despite difficulty or delay in achieving success.');
console.log(BMS.retrieve('perseverance'));

BMS.assign('Growth_Mindset', 'Is when people believe that their most basic abilities can be developed through dedication and hard work.');
console.log(BMS.retrieve('Growth_Mindset'));