const c2f = (c) => {
  return  c *1.8 +32;
 
};

const f2c = (f) => {
    return (f - 32) *5/9;
    
};

let res1 = c2f(12);
console.log(res1);

let res2 = f2c(100);
console.log(res2);

c2f(12);
f2c(100);