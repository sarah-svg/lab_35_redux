const getIndex = objectList => {
  const id = Object.keys(objectList);

  id.forEach((index, i)  => {
    if(index != i) return i;
  });
  return id.length;

};
export default getIndex;
