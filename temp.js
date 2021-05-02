var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl']
let ii = names.indexOf("Matt")
if (ii !== -1) {
    names.splice(ii, 1)
    console.log(names)
}