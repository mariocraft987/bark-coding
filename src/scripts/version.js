fetch('https://bark-coding.vercel.app/package.json')
    .then(res => res.json()).then(data => {
    obj = data;})
  .then(() => {
      console.log(obj.version)
      export const currentVersion = obj.version;
   });
