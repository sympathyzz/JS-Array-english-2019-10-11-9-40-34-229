// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a不是数组，b是数组。

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var res = a.map(function (item,index,ary ) {
    return item*2;
})
console.log(res);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
b=colors.join(' ');
console.log(b);
c=colors.join('+');
console.log(c);
a=colors.join();
console.log(a);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b - a});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
b=a.toString().split(",");
var fres={};
var mostFreqChar='';
var key;
for(var i=0;i<b.length;i++){
    var char=b[i];
    if(!fres[char]){
        fres[char]=0;
    }
    fres[char]++;
}
for (key in fres){
    if(mostFreqChar==''||fres[key]>fres[mostFreqChar]){
        mostFreqChar=key;
    }
}
console.log(mostFreqChar);
