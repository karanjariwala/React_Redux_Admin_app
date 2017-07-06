export function authorsFormattedForDropdown(authors){

return authors.map(author => {
  debugger;
  return{
    value:author.id,
    text:author.firstName+' '+author.lastName
  };
})
}
