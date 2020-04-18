export const updateObjectArray = (items, itemId, ObjPropName, newObjProps) => {
  items.map( item => {
  if (items[ObjPropName] === itemId) {
    return { ...item, ...newObjProps };
  }
  return item
})
}