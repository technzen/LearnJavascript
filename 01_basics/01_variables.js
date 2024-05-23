const accountId = 1334567 // used to declare constant variable
let accountEmail= "abc@google.com"
var accountPassword = "123450" // avoid using var beacause of issue in block and functional scope, instead use let
accountCity = "Kolkata" //avoid declaring variables directly
let accountState //no value initialised so value will be undefined
// accountId = 2 //not allowed as we can not change constant

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])